const jwt = require('jsonwebtoken')

module.exports = {
  getToken
}

// Create a JWT with a user id in it
function getToken (id) {
  return jwt.sign({id}, process.env.JWT_SECRET, {expiresIn: '1d'})
}
