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
    .insert({
      'category_id': tool.categoryId,
      'name': tool.name,
      'description': tool.description,
      'body': tool.body,
      'image': tool.image,
      'active': tool.active
    })
}

function editTool (db = connection) {
  return db('tools')
    .select()
}
