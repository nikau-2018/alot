import React, {Component} from 'react'

// Components
import Tools from '../Tools'

export default class ToolsContainer extends Component {
  componentDidMount () {
    this.props.fetchTools()
    // .then(() => {
    //   this.setState({
    //     displayedCategory: this.props.displayedCategory
    //   })
    // })
    this.props.fetchCategories()
  }

  render () {
    const filteredTools = this.props.match.params.category == null
      ? this.props.tools
      : this.props.tools.filter((tool) => {
        return this.props.match.params.category == tool.categoryId
      })
    return (
      <div className='tools-container'>
        <Tools
          // filterCategory={this.filterCategory}
          filteredTools={filteredTools}
        />

      </div>
    )
  }
}
