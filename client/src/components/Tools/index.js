import React from 'react'

// Components
import CategoryFilter from '../CategoryFilter'
import ToolCard from '../ToolCard'

const Tools = (props) => (

{/* <CategoryFilter filterCategory={props.filterCategory}/> */}
props.tools.filter((tool) => {
  if (displayedCategory.contains(props.state.tool.categoryId)) {
    return <ToolCard
      key={tool.id}
      name={tool.name}
      image={tool.image}
      description={tool.description}/>
  }
})
)
