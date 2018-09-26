exports.up = knex =>
  knex.schema.createTable('workshops', t => {
    t.increments('id').primary()
    t.integer('category_id').references('categories.id')
    t.integer('user_id').references('users.id')
    t.string('name')
    t.string('description')
    t.string('body')
    t.string('iamge')
    t.string('instructor')
    t.dateTime('date_time')
    t.timestamps(false, true)
  })

exports.down = knex => knex.schema.dropTable('workshops')
