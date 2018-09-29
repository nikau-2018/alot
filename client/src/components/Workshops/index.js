import React from 'react'

import Search from '../Search'
import CategoryFilter from '../CategoryFilter'
import WorkshopCard from '../WorkshopCard'

const Workshops = (props) => {
  return (
    <div className='workshops'>
      <Search />
      <CategoryFilter />
      {props.filteredWorkshops.map((workshop) => (
        <WorkshopCard
          category={props.category}
          key={workshop.id}
          id={workshop.id}
          name={workshop.name}
          image={workshop.image}
          description={workshop.description}
          instructor={workshop.instructor}
          dateTime={workshop.dateTime}/>
      ))}
    </div>
  )

  // if (props.category) {
  //   return (
  //     <div className='workshops'>
  //       <Search />
  //       <CategoryFilter />
  //       {props.workshops.map((workshop) => (
  //         (props.category.includes(workshop.categoryId)) &&
  //     <WorkshopCard
  //       category={props.category}
  //       key={workshop.id}
  //       id={workshop.id}
  //       name={workshop.name}
  //       image={workshop.image}
  //       description={workshop.description}
  //       instructor={workshop.instructor}
  //       dateTime={workshop.dateTime}/>
  //       ))}
  //     </div>
  //   )
  // } else {
  //   return (
  //     <div className='workshops'>
  //       <Search />
  //       <CategoryFilter />
  //       {props.workshops.map((workshop) => (
  //         <WorkshopCard
  //           category={props.category}
  //           key={workshop.id}
  //           id={workshop.id}
  //           name={workshop.name}
  //           image={workshop.image}
  //           description={workshop.description}
  //           instructor={workshop.instructor}
  //           dateTime={workshop.dateTime}/>
  //       ))}
  //     </div>
  //   )
  // }
}

export default Workshops
