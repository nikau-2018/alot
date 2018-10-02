import React from 'react'
import {Card, Image, Icon} from 'semantic-ui-react'
import Search from '../Search'
import CategoryFilter from '../CategoryFilter'
import ToolCard from '../ToolCard'

import styles from './styles.css'

const Tools = (props) => (
  <div>
    <Search toolSearch={true} />
    <CategoryFilter
      type='tools'
      category={props.category}
    />
    <div className={styles.tools}>
      <Card.Group>
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
