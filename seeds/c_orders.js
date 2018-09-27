
exports.seed = function (knex, Promise) {
  return knex('orders').del()
    .then(function () {
      return knex('orders').insert([
        {id: 66601, user_id: '44401', tool_id: '55501', notes: 'Will pick up on Saturday morning', status: 1},
        {id: 66602, user_id: '44403', tool_id: '55504', notes: 'Has booked for two weeks', status: 2},
        {id: 66603, user_id: '44402', tool_id: '55503', notes: 'Returned on Wednesday at 5pm', status: 0}
      ])
    })
}
