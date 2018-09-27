
exports.seed = function (knex, Promise) {
  return knex('workshops').del()
    .then(function () {
      return knex('workshops').insert([
        {id: 88801, catergory_id: 77701, name: 'Basic Sewing Workshop', description: '1-2 hours, great for beginners', body: 'In this workshop you will learn how to use a sewing machine and the stitching basics', image: '/placeholder-image.jpeg', instructor: 'Mary Valentine', date_time: '17/11/2018'},
        {id: 88802, catergory_id: 77702, name: 'Home Gardening Workshop', description: '2.5 hours', body: 'Learn how to grow food for your family in your backyard', image: '/placeholder-image.jpeg', instructor: 'John Smith', date_time: '24/11/2018'},
        {id: 88803, catergory_id: 77704, name: 'Build a Birdhouse Workshop', description: '2-3 hours, kid-friendly', body: 'In this workshop you will build your own wooden birdhouse. Once completed, it can be decorated with paint.', image: '/placeholder-image.jpeg', instructor: 'Peter Parker', date_time: '1/12/2018'}
      ])
    })
}
