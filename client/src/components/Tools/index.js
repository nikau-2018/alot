import React from 'react'

// Components
import CategoryFilter from '../CategoryFilter'
import ToolCard from '../ToolCard'

const Tools = (props) => (
  <div>
    <CategoryFilter filterCategory={props.filterCategory}/>
    {props.filteredTools.map((tool) => (
      <ToolCard
        key={tool.id}
        id={tool.id}
        name={tool.name}
        image={tool.image}
        description={tool.description}/>
    ))}
  </div>
)

export default Tools
