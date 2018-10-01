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
    const filteredTools = !category
      ? this.props.tools
      : this.props.tools.filter((tool) => {
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
