const express = require('express')

const router = express.Router()

const db = require('../db/tools')

router.get('/', (req, res) => {
  db.getTools()
    .then(tools => {
      // postgres return available as a string...
      const toolsList = tools.map(tool => {
        return {
          ...tool,
          available: Number(tool.available)
        }
      })
      res.status(200).json({toolsList})
    })
    .catch(err => {
      res.status(500).json(err)
    })
})

router.get('/:id', (req, res) => {
  const toolId = req.params.id
  db.getSingleTool(toolId)
    .then(tool => {
      res.status(200).json({tool})
    })
    .catch(err => {
      res.status(500).json(err)
    })
})

router.post('/add', (req, res) => {
  const tool = req.body
  db.addTool(tool)
    .then((id) => {
      res.status(201).json(id[0]).end()
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.put('/edit/:id', (req, res) => {
  const id = Number(req.params.id)
  const tool = req.body
  db.editTool(id, tool)
    .then(() => {
      res.status(201).end()
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

module.exports = router
