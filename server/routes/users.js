const express = require('express')
const verifyJwt = require('express-jwt')

const {checkHash} = require('../auth/hash')
const {getToken} = require('../auth/token')

const router = express.Router()

const db = require('../db/users')

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
          .then((id) => res.status(201).json(
            {
              ok: true,
              token: getToken(id)
            }
          ))
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
                token: getToken(user.id)
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

module.exports = router
