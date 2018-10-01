import React from 'react'

import Search from '../Search'
import CategoryFilter from '../CategoryFilter'
import WorkshopCard from '../WorkshopCard'

import styles from './styles.css'

const Workshops = (props) => (
  <div className='workshops'>
    <Search />
    <CategoryFilter
      type='workshops'
      category={props.category}
    />
    {props.filteredWorkshops.map((workshop) => (
      <WorkshopCard
        category={workshop.categoryId}
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

export default Workshops
