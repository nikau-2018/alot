exports.up = knex =>
  knex.schema.createTable('tools', t => {
    t.increments('id').primary()
    t.integer('category_id').references('categories.id')
    t.string('name')
    t.string('description')
    t.string('image')
    t.boolean('active')
    t.timestamps(false, true)
  })

exports.down = knex => knex.schema.dropTable('tools')
