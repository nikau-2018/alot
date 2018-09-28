const express = require('express')
const path = require('path')

const tools = require('./routes/tools')
const categories = require('./routes/categories')
const workshops = require('./routes/workshops')
const orders = require('./routes/orders')
const users = require('./routes/users')

const server = express()

if (process.env.NODE_ENV === 'production') {
  server.use(express.static(path.join(__dirname, '..', '../public')))
}

server.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
  next()
})

server.use(express.json())
server.use('/api/v1/tools', tools)
server.use('/api/v1/categories', categories)
server.use('/api/v1/workshops', workshops)
server.use('/api/v1/orders', orders)
server.use('/api/v1/users', users)

// In production, serve any request not covered by the above as the built index
// from CRA's `yarn build` (for BrowserRouter)
if (process.env.NODE_ENV === 'production') {
  server.get('*', (req, res) => {
    res.sendfile(path.join(__dirname, '..', 'public/index.html'))
  })
}

module.exports = server
