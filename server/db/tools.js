const connection = require('./')

module.exports = {
  getTools,
  getSingleTool,
  addTool,
  editTool
}

// todo
function getTools (db = connection) {
  return db('tools')
    .select(db.raw(`*,
      (SELECT tools.stocked - COUNT(orders.id)
      FROM orders WHERE orders.tool_id = tools.id
      AND orders.status >0) AS available`))
    .orderBy('name', 'asc')
}

// warning - this wont have availability in it!
function getSingleTool (toolId, db = connection) {
  return db('tools')
    .where('id', toolId)
    .join('orders', 'id', 'orders.tool_id')
    .select()
}

function addTool (tool, db = connection) {
  return db('tools')
    .insert(tool)
}

function editTool (id, tool, db = connection) {
  return db('tools')
    .where('id', id)
    .update(tool)
}
