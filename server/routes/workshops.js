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

router.post('/add', (req, res) => {
  const workshop = req.body
  db.addWorkshop(workshop)
    .then((id) => {
      res.status(201).json(id[0]).end()
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.put('/edit/:id', (req, res) => {
  const id = Number(req.params.id)
  const workshop = req.body
  db.editWorkshop(id, workshop)
    .then(() => {
      res.status(201).end()
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})
module.exports = router
