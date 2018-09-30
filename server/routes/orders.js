const express = require('express')

const router = express.Router()

const db = require('../db/orders')

router.post('/create', createOrder)

function createOrder (req, res) {
  const order = req.body
  // when we have auth, we can grab the userId from the token
  order.user_id = 44401
  db.createOrder(order)
    .then(id => {
      res.status(201).json({
        ok: true,
        id: id[0]
      })
    })
    .catch(err => {
      res.status(500).json(err)
    })
}

module.exports = router
