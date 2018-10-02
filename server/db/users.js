const connection = require('./')
const {generateHash} = require('../auth/hash')

module.exports = {
  createUser,
  getUser,
  userExists,
  getEmployees
}

function createUser (user, password, db = connection) {
  return generateHash(password)
    .then(hash => {
      user.hash = hash
      user.role = 0
      return db('users')
        .insert(user)
        .returning('id')
    })
}

function userExists (email, db = connection) {
  return db('users')
    .count('id as n')
    .where('email', email)
    .then(count => {
      return count[0].n > 0
    })
}

function getUser (email, db = connection) {
  return db('users')
    .where({email})
    .first()
}

function getEmployees (db = connection) {
  return db('users')
    .where('role', 1)
}
