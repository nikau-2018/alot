const jwt = require('jsonwebtoken')
const {getUser} = require('../db/users')

module.exports = {
  getToken,
  getSecret,
  handleError,
  isAdmin
}

// Create a JWT with a user id in it
function getToken (user) {
  return jwt.sign({
    id: user.id,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    phone: user.phone,
    role: user.role
  }, process.env.JWT_SECRET, {expiresIn: '1d'})
}

function getSecret (req, payload, done) {
  done(null, process.env.JWT_SECRET)
}

function handleError (err, req, res, next) {
  if (err) {
    return res.status(403).json({
      message: 'Access to this resource was denied.',
      error: err.message
    })
  }
  next()
}

// figure out why this crashes the server...
function isAdmin (req, res, next) {
  getUser(req.user.email)
    .then(user => {
      if (user.role === 1) {
        next()
      } else {
        next('not an admin')
      }
    })
}
