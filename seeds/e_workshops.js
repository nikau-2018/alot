exports.seed = function (knex, Promise) {
  return knex('workshops').del()
    .then(function () {
      return knex('workshops').insert([
        {id: 88801, category_id: 77701, name: 'Basic Sewing Workshop', description: '1-2 hours, great for beginners', body: 'In this workshop you will learn how to use a sewing machine and the stitching basics', image: '/workshop-images/sewing.jpg', instructor: 'Mary Valentine', date_time: null},
        {id: 88802, category_id: 77702, name: 'Home Gardening Workshop', description: '2.5 hours', body: 'Learn how to grow food for your family in your own backyard', image: '/workshop-images/home-gardening.jpg', instructor: 'John Smith', date_time: null},
        {id: 88803, category_id: 77704, name: 'Build a Birdhouse Workshop', description: '2-3 hours, kid-friendly', body: 'In this workshop you will build your own wooden birdhouse. Once completed, it can be decorated with paint.', image: '/workshop-images/birdhouse.jpg', instructor: 'Peter Parker', date_time: null}
      ])
    })
}
