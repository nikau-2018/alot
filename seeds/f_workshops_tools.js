
exports.seed = function (knex, Promise) {
  return knex('workshops_tools').del()
    .then(function () {
      return knex('workshops_tools').insert([
        {id: 99901, workshop_id: 88801, tool_id: 55503},
        {id: 99902, workshop_id: 88803, tool_id: 55505},
        {id: 99903, workshop_id: 88803, tool_id: 55504}
      ])
    })
}
