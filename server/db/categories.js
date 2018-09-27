const connection = require('./')

module.exports = {
  getCategories
}

function getCategories (db = connection) {
  return db('categories')
    .select()
}
