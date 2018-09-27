const express = require('express')

const router = express.Router()

const db = require('../db/workshops')

router.get('/', (req, res) => {
  db.getWorkshops()
    .then(workshops => {
      res.status(200).json({workshops})
    })
    .catch(err => {
      res.status(500).json(err)
    })
})

module.exports = router
