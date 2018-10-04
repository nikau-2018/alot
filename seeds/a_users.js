// these hashes are useless outside of dev :)
exports.seed = function (knex, Promise) {
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
        {id: 44401, email: 'jake@gmail.com', hash: '$argon2id$v=19$m=8,t=2,p=1$zBo1QEUXWN+7s0Gy8KHXyg$oVxRSt1QFNx25zqYkZ4WVTOrspgnAnmdQES3o5rcfCQ', first_name: 'Jake', last_name: 'Norris', phone: '0273678248', role: 1},
        {id: 44402, email: 'paige@outlook.com', hash: '$argon2id$v=19$m=8,t=2,p=1$5eRz7H9HEFvQJmgIhtsXLg$cIGH8jY97tDHeba0G5aoQ8srtSHZB0pllJDtVOIJGpg', first_name: 'Paige', last_name: 'Bird', phone: '0277830452', role: 0},
        {id: 44403, email: 'maryvalentine@email.com', hash: '$argon2id$v=19$m=8,t=2,p=1$oID5P90PLgNHw0wB1pgxvw$8+OWprB8D9yOic6EVwo2DNLlWLsr9/VfASsAUGYbQyY', first_name: 'Mary', last_name: 'Valentine', phone: '0278942076', role: 0}
      ])
    })
}
