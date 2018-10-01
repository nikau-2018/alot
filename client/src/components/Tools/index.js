import React from 'react'

// Components
import Search from '../Search'
import CategoryFilter from '../CategoryFilter'
import ToolCard from '../ToolCard'

import styles from './styles.css'

const Tools = (props) => (
  <div>
    <Search />
    <CategoryFilter type='tools' />
    {props.filteredTools.map((tool) => (
      <ToolCard
        key={tool.id}
        id={tool.id}
        name={tool.name}
        image={tool.image}
        description={tool.description}
        category={tool.categoryId}
      />
    ))}
  </div>
)

export default Tools
