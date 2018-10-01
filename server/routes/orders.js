const express = require('express')
const verifyJwt = require('express-jwt')
const {getSecret, handleError, isAdmin} = require('../auth')

const router = express.Router()

const db = require('../db/orders')

router.post('/create', verifyJwt({secret: getSecret}), createOrder, handleError)

function createOrder (req, res) {
  const order = req.body
  order.userId = req.user.id
  order.status = 1
  db.createOrder(order)
    .then(id => {
      res.status(201).json({
        ok: true
      })
    })
    .catch(() => {
      res.status(500).json('DB error')
    })
}

router.get('/', (req, res) => {
  db.getOrders()
    .then(orders => {
      res.status(200).json({orders})
    })
    .catch(() => {
      res.status(500).json('DB error')
    })
})

module.exports = router
