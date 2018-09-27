const express = require('express')

const router = express.Router()

const db = require('../db/categories')

router.get('/', (req, res) => {
  db.getCategories()
    .then(categories => {
      res.status(200).json({categories})
    })
    .catch(err => {
      res.status(500).json(err)
    })
})

module.exports = router
