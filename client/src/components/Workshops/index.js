import React from 'react'

import Search from '../Search'
import CategoryFilter from '../CategoryFilter'
import WorkshopCard from '../WorkshopCard'

import styles from './styles.css'

const Workshops = (props) => (
  <div className={styles.tools}>
    <h1 className={styles.header}>Tools</h1>
    <div className={styles.top}>
      <CategoryFilter
        type='workshops'
        category={props.category}
        className={styles.filter}
      />
      <Search className={styles.search} toolSearch={false} />
    </div>
    <div className={styles.toolCards}>
      <Card.Group stackable centered>
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
      </Card.Group>
    </div>
  </div>
)

export default Workshops
