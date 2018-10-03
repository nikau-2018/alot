import React from 'react'
import {Card} from 'semantic-ui-react'
import Search from '../Search'
import CategoryFilter from '../CategoryFilter'
import ToolCard from '../ToolCard'

import styles from './styles.css'

const Tools = (props) => (
  <div className={styles.tools}>
    <h1 className={styles.header}>Tools</h1>
    <div className={styles.top}>
      <CategoryFilter
        type='tools'
        category={props.category}
        className={styles.filter}
      />
      <Search className={styles.search} toolSearch={true} />
    </div>
    <div>
      <Card.Group stackable centered>
        {props.filteredTools.map((tool) => (
          <ToolCard
            key={tool.id}
            id={tool.id}
            name={tool.name}
            image={tool.image}
            description={tool.description}
            category={tool.categoryId}
            available={tool.available}
          />
        ))}
      </Card.Group>
    </div>
  </div>
)

export default Tools
