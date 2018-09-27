const connection = require('./')

module.exports = {
  getTools
}

function getTools (db = connection) {
  return db('tools')
    .select()
}
