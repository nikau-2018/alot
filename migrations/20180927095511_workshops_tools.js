exports.up = knex =>
  knex.schema.createTable('workshops_tools', t => {
    t.increments('id').primary()
    t.integer('workshop_id').references('workshops.id')
    t.integer('tool_id').references('tools.id')
  })

exports.down = knex => knex.schema.dropTable('workshops_tools')
