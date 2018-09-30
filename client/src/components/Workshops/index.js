import React from 'react'

import styles from './styles.css'

import Search from '../Search'
import CategoryFilter from '../CategoryFilter'
import WorkshopCard from '../WorkshopCard'

const Workshops = (props) => (
  <div className='workshops'>
    <Search />
    <CategoryFilter type='workshops' />
    {props.workshops.map((workshop) => (
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

export default Workshops
