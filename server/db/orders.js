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
    .join('users', 'orders.user_id', 'users.id')
    .join('tools', 'orders.tool_id', 'tools.id')
    .select('orders.id',
      'orders.notes',
      'orders.status',
      'orders.createdAt',
      'users.firstName',
      'users.lastName',
      'users.email',
      'users.phone',
      'tools.name as tool',
      'users.id as userId',
      'tools.id as toolId',
      'tools.category_id as categoryId'
    )
}
