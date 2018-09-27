import React, {Component} from 'react'

export default class ToolsContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      displayedCategory: [
        77701, 77702, 77703, 77704
      ],// will be set from the store in redux
      tools: []
    }
  }

  filterCategory (selectedCategory) {
    this.setState({
      displayedCategory: selectedCategory
    })
  }

  render() {

    tools.map((tool) => {
      if (displayedCategory.contains(tool.categoryId)){
        return <ToolCard
        key={tool.id}
        name={tool.name}
        image={tool.image}
        description={tool.description}/>
      }
    })
    return (

    )
  }
}
