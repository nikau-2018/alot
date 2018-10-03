exports.seed = function (knex, Promise) {
  return knex('categories').del()
    .then(function () {
      return knex('categories').insert([
        {id: 77701, name: 'Sewing', description: 'Everything to do with sewing', image: '/category-images/sewing.jpg'},
        {id: 77702, name: 'Gardening', description: 'Everything to do with gardening', image: '/category-images/gardening.jpg'},
        {id: 77703, name: 'Painting', description: 'Everything to do with painting', image: '/category-images/painting.jpg'},
        {id: 77704, name: 'Woodwork', description: 'Everything to do with woodwork', image: '/category-images/woodwork.jpg'},
        {id: 77705, name: 'Contruction', description: 'Everything to do with construction', image: '/category-images/construction.jpg'},
        {id: 77706, name: 'Accessories', description: 'Accessories', image: '/category-images/accessories.jpg'}
      ])
    })
}
