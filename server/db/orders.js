const connection = require('./')

module.exports = {
  createOrder,
  getOrders
}

function createOrder (order, db = connection) {
  return db('orders')
    .insert(order)
    .returning('id')
}

function getOrders (db = connection) {
  return db('orders')
    .select()
}
