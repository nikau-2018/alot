const connection = require('./')

module.exports = {
  getTools,
  getSingleTool
}

function getTools (db = connection) {
  return db('tools')
    .select()
}

function getSingleTool (db = connection, toolId) {
  return db('tools')
    .where('id', toolId)
}
