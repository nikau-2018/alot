import React from 'react'

import Search from '../Search'
import CategoryFilter from '../CategoryFilter'
import ToolCard from '../ToolCard'

import styles from './styles.css'

const Tools = (props) => (
  <div className='tools'>
    <Search type='tools'/>
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
      />
    ))}
  </div>
)

export default Tools
