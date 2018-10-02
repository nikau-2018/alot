const express = require('express')
const verifyJwt = require('express-jwt')

const {checkHash} = require('../auth/hash')
const {getToken, getSecret, handleError, isAdmin} = require('../auth')

const router = express.Router()

const db = require('../db/users')

router.get('/', getUsers)

function getUsers (req, res) {
  db.getUsers()
    .then(users => {
      res.status(200).json({users})
    })
    .catch(err => {
      res.status(500).json(err)
    })
}

router.post('/register', register)

function register (req, res) {
  db.userExists(req.body.user.email)
    .then(exists => {
      exists
        ? res.status(400).json({
          ok: false,
          message: 'User exists'
        })
        : db.createUser(req.body.user, req.body.password)
          .then(() => {
            db.getUser(req.body.user.email)
              .then(user => {
                res.status(201).json({
                  ok: true,
                  token: getToken(user)
                })
              })
          })
    })
    .catch(() => {
      res.status(500).json({
        ok: false,
        message: 'Unknown error when logging in.'
      })
    })
}

router.post('/login', login)

function login (req, res) {
  const {email, password} = req.body
  db.getUser(email)
    .then(user => {
      user
        ? checkHash(user.hash, password)
          .then(ok => {
            ok
              ? res.status(200).json({
                ok: true,
                token: getToken(user)
              })
              : res.status(403).json({
                ok: false,
                message: 'Wrong password.'
              })
          })
        : res.status(400).json({
          ok: false,
          message: 'User does not exist.'
        })
    })
    .catch(() => res.status(500).json({
      ok: false,
      message: 'Unknown error when logging in.'
    }))
}

router.get('/protected', verifyJwt({secret: getSecret}), protec, handleError)

function protec (req, res) {
  res.json({
    message: 'You can only see this if you are logged in.',
    user: `Your user ID is: ${req.user.id}`
  })
}

router.get('/protectedadmin', verifyJwt({secret: getSecret}), isAdmin, protecadmin, handleError)

function protecadmin (req, res) {
  res.json({
    message: 'You can only see this if you are logged in as an ADMIN.',
    user: `Your user ID is: ${req.user.id}`
  })
}

module.exports = router
