const jwt = require('jsonwebtoken')

module.exports = {
  getToken,
  getSecret,
  handleError
}

// Create a JWT with a user id in it
function getToken (id) {
  return jwt.sign({id}, process.env.JWT_SECRET, {expiresIn: '1d'})
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
