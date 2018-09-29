import React, {Component} from 'react'

// Components
import Tools from '../Tools'

export default class ToolsContainer extends Component {
  componentDidMount () {
    this.props.fetchTools()
    this.props.fetchCategories()
  }

  render () {
    console.log(this.props.match.params.category)
    const filteredTools = !this.props.match.params.category
      ? this.props.tools
      : this.props.tools.filter((tool) => {
        return this.props.match.params.category == tool.categoryId
      })
    return (
      <div className='tools-container'>
        <Tools
          filteredTools={filteredTools}
        />

      </div>
    )
  }
}
