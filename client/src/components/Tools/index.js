import React from 'react'

import Search from '../Search'
import CategoryFilter from '../CategoryFilter'
import ToolCard from '../ToolCard'

import styles from './styles.css'

const Tools = (props) => (
  <div className='tools'>
    <Search />
    <CategoryFilter
      type='tools'
      category={props.category}
    />
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
  </div>
)

export default Tools
