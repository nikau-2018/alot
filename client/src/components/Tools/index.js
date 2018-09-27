import React from 'react'

// Components
import CategoryFilter from '../CategoryFilter'
import ToolCard from '../ToolCard'

const Tools = (props) => (

<CategoryFilter filterCategory={this.filterCategory}/>
this.state.tools.map((tool) => {
  if (displayedCategory.contains(this.state.tool.categoryId)) {
    return <ToolCard
      key={tool.id}
      name={tool.name}
      image={tool.image}
      description={tool.description}/>
  }
})
)
