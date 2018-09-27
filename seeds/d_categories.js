exports.seed = function (knex, Promise) {
  return knex('categories').del()
    .then(function () {
      return knex('categories').insert([
        {id: 77701, name: 'Sewing', description: '', image: '/placeholder-image.jpeg'},
        {id: 77702, name: 'Gardening', description: '', image: '/placeholder-image.jpeg'},
        {id: 77703, name: 'Painting', description: '', image: '/placeholder-image.jpeg'},
        {id: 77704, name: 'Woodwork', description: '', image: '/placeholder-image.jpeg'}
      ])
    })
}
