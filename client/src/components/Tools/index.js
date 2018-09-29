import React from 'react'

// Components
import CategoryFilter from '../CategoryFilter'
import ToolCard from '../ToolCard'

const Tools = (props) => (
  <div>
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
