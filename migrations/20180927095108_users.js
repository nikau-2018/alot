exports.up = knex =>
  knex.schema.createTable('users', t => {
    t.increments('id').primary()
    t.string('email').unique()
    t.string('hash')
    t.string('first_name')
    t.string('last_name')
    t.string('phone')
    t.integer('role')
    t.timestamps(false, true)
  })

exports.down = knex => knex.schema.dropTable('users')
