exports.seed = function (knex, Promise) {
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 44401, email: 'jakenorris@email.com', hash: '', first_name: 'Jake', last_name: 'Norris', phone: '0273678248', role: 0},
        {id: 44402, email: 'paigebird@email.com', hash: '', first_name: 'Paige', last_name: 'Bird', phone: '0277830452', role: 0},
        {id: 44403, email: 'maryvalentine@email.com', hash: '', first_name: 'Mary', last_name: 'Valentine', phone: '0278942076', role: 1}
      ])
    })
}
