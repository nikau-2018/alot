
exports.seed = function (knex, Promise) {
  return knex('tools').del()
    .then(function () {
      // Inserts seed entries
      return knex('tools').insert([
        {id: 55501, category_id: '', name: 'Lawn Mower', description: '', image: '/placeholder-image.jpeg', active: true},
        {id: 55502, category_id: '', name: 'Paint Brush', description: '100mm', image: '/placeholder-image.jpeg', active: true},
        {id: 55503, category_id: '', name: 'Sewing Machine', description: 'Singer....', image: '', active: true},
        {id: 55501, category_id: '', name: 'Nail Gun', description: '', image: '/placeholder-image.jpeg', active: true}
      ])
    })
}
