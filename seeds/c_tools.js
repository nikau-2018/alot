exports.seed = function (knex, Promise) {
  return knex('tools').del()
    .then(function () {
      return knex('tools').insert([
        {id: 55501, category_id: 77702, name: 'Lawn Mower', description: 'Ryobi 190cc Self-Propelled Yamaha Lawn Mower, powerful 190cc 4-stroke OHV Yamaha engine, self-propelled drive, mulching and side-discharge options, 460mm cutting path with adjustable cutting height, 4 swing back blades for increased cut and safety', image: '/tool-images/lawn-mower.jpg', active: true},
        {id: 55502, category_id: 77703, name: 'Paint Brush', description: 'Haydn Synthetic Paint Brush, 100mm wide, ergonomically designed beaver tail handle, suitable for fence painting', image: '/tool-images/paint-brush.jpg', active: true},
        {id: 55503, category_id: 77701, name: 'Sewing Machine', description: 'Brother GS2510 Sewing Machine, 25 built-in stitches, built-in needle threader, automatic button hole, LED light, top load bobbin', image: '/tool-images/sewing-machine.jpg', active: true},
        {id: 55504, category_id: 77704, name: 'Hammer', description: 'Stanley Hammer 565g, fiberglass shaft absorbs shock and vibration, textured rubber comfort grip', image: '/tool-images/hammer.jpg', active: true},
        {id: 55505, category_id: 77702, name: 'Rake', description: 'Saxon Long Handle 14 Tine Garden Rake, long timber handle, ideal for raking and clearing soils, leaves and stones ', image: '/tool-images/rake.jpg', active: true}
      ])
    })
}
