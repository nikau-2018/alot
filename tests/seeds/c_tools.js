exports.seed = function (knex, Promise) {
  return knex('tools').del()
    .then(function () {
      return knex('tools').insert([
        {id: 55501, category_id: 77702, name: 'Lawn Mower', description: 'Ryobi 190cc Self-Propelled Yamaha Lawn Mower', body: 'Powerful 190cc 4-stroke OHV Yamaha engine *Mulching and side-discharge options *460mm cutting path with adjustable cutting height *4 swing back blades for increased cut and safety', image: '/tool-images/lawn-mower.jpg', stocked: 3},
        {id: 55502, category_id: 77703, name: 'Paint Brush', description: 'Haydn Synthetic Paint Brush', body: '100mm wide *Ergonomically designed beaver tail handle *Suitable for fence painting', image: '/tool-images/paint-brush.jpg', stocked: 2},
        {id: 55503, category_id: 77701, name: 'Sewing Machine', description: 'Brother GS2510 Sewing Machine', body: '25 built-in stitches *Built in needle threader *Automatic button hole *LED light *Top load bobbin', image: '/tool-images/sewing-machine.jpg', stocked: 1},
        {id: 55504, category_id: 77704, name: 'Hammer', description: 'Stanley Hammer 565g', body: 'Fiberglass shaft absorbs shock and vibration *Textured rubber comfort grip', image: '/tool-images/hammer.jpg', stocked: 1},
        {id: 55505, category_id: 77702, name: 'Garden Hand Tools', description: 'Fiskars Garden Hand Tool Set 3pc', body: 'Soft grip', image: '/tool-images/garden-hand-tools.jpg', stocked: 1}
      ])
    })
}
