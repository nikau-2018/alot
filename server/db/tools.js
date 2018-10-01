const connection = require('./')

module.exports = {
  getTools,
  getSingleTool,
  addTool,
  editTool
}

function getTools (db = connection) {
  return db('tools')
    .select()
}

function getSingleTool (toolId, db = connection) {
  return db('tools')
    .where('id', toolId)
    .first()
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
