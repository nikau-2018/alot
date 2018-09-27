const connection = require('./')

module.exports = {
  createOrder
}

function createOrder (order, db = connection) {
  return db('orders')
    .insert(order)
}
