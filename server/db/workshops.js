const connection = require('./')

module.exports = {
  getWorkshops,
  addWorkshop,
  editWorkshop
}

function getWorkshops (db = connection) {
  return db('workshops')
    .select()
}

function addWorkshop (workshop, db = connection) {
  return db('workshops')
    .insert(workshop)
}

function editWorkshop (id, workshop, db = connection) {
  return db('workshops')
    .where('id', id)
    .update(workshop)
}