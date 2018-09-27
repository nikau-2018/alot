const express = require('express')

const router = express.Router()

const db = require('../db/tools')

router.get('/', (req, res) => {
  db.getTools()
    .then(tools => {
      res.status(200).json({tools})
    })
    .catch(err => {
      res.status(500).json(err)
    })
})

module.exports = router
