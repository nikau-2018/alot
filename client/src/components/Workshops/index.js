import React from 'react'
import {Card} from 'semantic-ui-react'
import Search from '../Search'
import CategoryFilter from '../CategoryFilter'
import WorkshopCard from '../WorkshopCard'

import styles from './styles.css'

const Workshops = (props) => (
  <div className={styles.workshops}>
    <h1 className={styles.header}>Workshops</h1>
    <div className={styles.top}>
      <CategoryFilter
        type='workshops'
        category={props.category}
        className={styles.filter}
      />
      <Search className={styles.search} toolSearch={false} />
    </div>
    <div className={styles.cardGroup}>
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
            dateTime={workshop.dateTime}
            body={workshop.body} />
        ))}
      </Card.Group>
    </div>
  </div>
)

export default Workshops
