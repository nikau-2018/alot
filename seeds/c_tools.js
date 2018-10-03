exports.seed = function (knex, Promise) {
  return knex('tools').del()
    .then(function () {
      return knex('tools').insert([
        {id: 55501, category_id: 77702, name: 'Lawn Mower', description: 'Ryobi 190cc Self-Propelled Yamaha Lawn Mower', body: 'Powerful 190cc 4-stroke OHV Yamaha engine *Mulching and side-discharge options *460mm cutting path with adjustable cutting height *4 swing back blades for increased cut and safety', image: '/tool-images/lawn-mower.jpg', stocked: 3},
        {id: 55502, category_id: 77703, name: 'Paint Brush', description: 'Haydn Synthetic Paint Brush', body: '100mm wide *Ergonomically designed beaver tail handle *Suitable for fence painting', image: '/tool-images/paint-brush.jpg', stocked: 2},
        {id: 55503, category_id: 77701, name: 'Sewing Machine', description: 'Brother GS2510 Sewing Machine', body: '25 built-in stitches *Built in needle threader *Automatic button hole *LED light *Top load bobbin', image: '/tool-images/sewing-machine.jpg', stocked: 1},
        {id: 55504, category_id: 77704, name: 'Hammer', description: 'Stanley Hammer 565g', body: 'Fiberglass shaft absorbs shock and vibration *Textured rubber comfort grip', image: '/tool-images/hammer.jpg', stocked: 1},
        {id: 55505, category_id: 77702, name: 'Garden Hand Tools', description: 'Fiskars Garden Hand Tool Set 3pc', body: 'Soft grip', image: '/tool-images/garden-hand-tools.jpg', stocked: 1},
        {id: 55506, category_id: 77702, name: 'Rake', description: 'Saxon Long Handle 14 Tine Garden Rake', body: 'Long timber handle *Ideal for raking and clearing soils, leaves and stones ', image: '/tool-images/rake.jpg', stocked: 5},
        {id: 55507, category_id: 77702, name: 'Garden Trolley', description: '60L Garden Trolley', body: 'Good volume carrying capacity *Strong *Lightweight', image: '/tool-images/garden-trolley.jpg', stocked: 1},
        {id: 55508, category_id: 77703, name: 'Paint Roller', description: 'Paint Partner Roller Frame & Roller Cover 230mm', body: 'Comfortable grip *Sturdy steel frame *Washable and reusable', image: '/tool-images/paint-roller.jpg', stocked: 4},
        {id: 55509, category_id: 77703, name: 'Paint Tray', description: 'Monarch Paint Tray 230mm', body: 'Suitable for 230mm paint rollers *Light and sturdy construction *Paint spout for easy pouring *Easy to clean and reusable', image: '/tool-images/paint-tray.jpg', stocked: 1},
        {id: 55510, category_id: 77704, name: 'Screwdrivers', description: 'Fuller Robertson Screwdriver Set 4pc', body: 'Non-slip grip handles *Set includes: S2x38mm, S1x100mm, S2x100mm, S2x200mm', image: '/tool-images/screwdrivers.jpg', stocked: 1},
        {id: 55511, category_id: 77704, name: 'Sander', description: 'Ryobi 180W Multi Pad Sander', body: '180W motor *Efficient cyclonic micro filtration dust collection *Triangular shaped front base for detail and corner sanding', image: '/tool-images/sander.jpg', stocked: 1},
        {id: 55512, category_id: 77701, name: 'Overlocker', description: 'Singer 14SH654 Finishing Touch Overlocker', body: 'Up to 1,300 stitches per minute *Three thread overlock *Conversion from normal over edging to rolled hemming can be accomplished without changing the throat plate', image: '/tool-images/overlocker.jpg', stocked: 1},
        {id: 55513, category_id: 77701, name: 'Needles', description: 'Birch Crewel Needles', body: 'Versatile all-purpose needles *Durable and easy to handle', image: '/tool-images/needles.jpg', stocked: 3},
        {id: 55514, category_id: 77705, name: 'Impact Drill', description: 'Ryobi Impact Drill 800W', body: '800W  *Easy switch from Drilling to High-Speed Hammer action *13mm Keyless chuck for quick & easy bit changes', image: '/tool-images/impact-drill.jpg', stocked: 5},
        {id: 55515, category_id: 77705, name: 'Floor Mounted Pedestral', description: 'Full Boar Floor Mounted Pedestal Drill 1HP 750W', body: '750W  *Free Standing heavy duty Pedestal Drill press with powerful 750W induction motor *Enables greater efficiency, accuracy and ease of use for precise drilling applications', image: '/tool-images/floor-mounted-pedestral.jpg', stocked: 3},
        {id: 55516, category_id: 77705, name: 'Brushless Trim Router', description: 'AEG 18V Brushless Trim Router', body: '18V Brushless motor *17,000‐25,000 RPM variable speed range *Standard ¼" collet size', image: '/tool-images/brushless-trim-router.jpg', stocked: 2},
        {id: 55517, category_id: 77705, name: 'Cement Mixer', description: 'Full Boar 220L 370W Cement Mixer', body: 'Powerful 370W motor *Quick assembly to save time setting up *Easy dump control handle for straightforward operation', image: '/tool-images/cement-mixer.jpg', stocked: 3},
        {id: 55518, category_id: 77705, name: 'Waterblaster', description: 'Karcher ProHD 400 Professional Waterblaster', body: 'Features a practical additional handle, making it convenient and easy to load and transport *Clever accessory storage comprises a nozzle compartment *Automatic pressure relief system protects the components and extends the service life of the machine', image: '/tool-images/waterblaster.jpg', stocked: 1},
        {id: 55519, category_id: 77706, name: 'Trowel', description: 'Marshalltown 400 x 100mm Stainless Steel Dura Gold Trowel', body: 'Bright Stainless steel blade  *Aluminium alloy Xtralite® *DuraSoft® handle provides a soft feel, reduces fatigue', image: '/tool-images/impact-drill.jpg', stocked: 10},
        {id: 55520, category_id: 77706, name: 'Face Protection Respirator', description: '3M Tekk 1/2 Face Protection Respirator', body: 'Half face protection  *Soft and comfortable fit; molds to the face *Reusable', image: '/tool-images/face-protection-respirator.jpg', stocked: 5},
        {id: 55521, category_id: 77706, name: 'Moisture Meter', description: 'Stanley Moisture Meter', body: 'Measuring environment temperature *Two detection pins (8mm length) to locate in material being tested *Operating temperature 0 - 40° C', image: '/tool-images/moisture-meter.jpg', stocked: 2},
        {id: 55522, category_id: 77706, name: 'Level', description: 'Stabila Type 96 Standard Aluminium Level 1200mm Yellow', body: 'Anti-slip stopper *Shock-Absorbing Ends *Hanghole', image: '/tool-images/level.jpg', stocked: 3},
        {id: 55523, category_id: 77706, name: 'Tool Bag', description: 'Stanley Xtreme Tool Bag Round Top', body: 'The most heavy duty 1200 denier fabric for long lasting durability *Rigid and waterproof plastic base moulded to plastic *Multiple use tool compartments for all storage needs with easy access pockets', image: '/tool-images/tool-bag.jpg', stocked: 2},
        {id: 55524, category_id: 77706, name: 'Digital Calipers', description: 'Kincrome 150mm Digital Vernier Calipers', body: '4 way measurement * 0.001 - 150mm * Digital screen * Plastic case * Heavy duty use', image: '/tool-images/calipers.jpg', stocked: 5},
        {id: 55525, category_id: 77705, name: 'Demolition Hammer', description: 'Full Boar 1750W Heavy Duty', body: '45 Joules to power through tough demolition jobs * Carry case with wheels provides convenient transport and storage * Soft grip handles increase user comfort and provide a more secure grip * Flat and pointed chisels included', image: '/tool-images/demo.jpg', stocked: 1}
      ])
    })
}
