const connection = require('./')

module.exports = {
  createOrder,
  getOrders
}

function createOrder (order, db = connection) {
  return db('orders')
    .insert(order)
}

function getOrders (db = connection) {
  return db('orders')
    .select()
}
