exports.up = knex =>
  knex.schema.createTable('orders', t => {
    t.increments('id').primary()
    t.integer('user_id').references('users.id')
    t.integer('tool_id').references('tools.id')
    t.string('notes')
    t.integer('status')
    t.timestamps(false, true)
  })

exports.down = knex => knex.schema.dropTable('orders')
