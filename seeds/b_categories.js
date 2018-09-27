exports.seed = function (knex, Promise) {
  return knex('categories').del()
    .then(function () {
      return knex('categories').insert([
        {id: 77701, name: 'Sewing', description: 'Everything to do with sewing', image: '/placeholder-image.jpeg'},
        {id: 77702, name: 'Gardening', description: 'Everything to do with gardening', image: '/placeholder-image.jpeg'},
        {id: 77703, name: 'Painting', description: 'Everything to do with painting', image: '/placeholder-image.jpeg'},
        {id: 77704, name: 'Woodwork', description: 'Everything to do with woodwork', image: '/placeholder-image.jpeg'}
      ])
    })
}
