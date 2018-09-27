const connection = require('./')

module.exports = {
  getWorkshops
}

function getWorkshops (db = connection) {
  return db('workshops')
    .select()
}
