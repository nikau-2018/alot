import React, {Component} from 'react'

// Components
import Tools from '../Tools'

export default class ToolsContainer extends Component {
  componentDidMount () {
    this.props.fetchTools()
    this.props.fetchCategories()
  }

  render () {
    const category = this.props.match.params.category
    const tools = this.props.tools.filter(tool => tool.name.toLowerCase().includes(this.props.search.toLowerCase()))
    const filteredTools = !category
      ? tools
      : tools.filter((tool) => {
        return category == tool.categoryId
      })
    return (
      <div className='tools-container'>
        <Tools
          filteredTools={filteredTools}
          category={category}
        />
      </div>
    )
  }
}
