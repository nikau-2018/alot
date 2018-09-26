exports.up = knex =>
  knex.schema.createTable('categories', t => {
    t.increments('id').primary()
    t.string('name')
    t.string('description')
    t.string('image')
  })

exports.down = knex => knex.schema.dropTable('categories')
