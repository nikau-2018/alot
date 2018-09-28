import React, {Component} from 'react'

// Components
import Tools from '../Tools'

export default class ToolsContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      displayedCategory: []
    }
    this.filterCategory = this.filterCategory.bind(this)
  }

  componentDidMount () {
    this.props.fetchTools()
      .then(() => {
        this.setState({
          displayedCategory: this.props.displayedCategory
        })
      })
    this.props.fetchCategories()
  }

  filterCategory (selectedCategory) {
    this.setState({
      displayedCategory: [Number(selectedCategory)]
    })
  }

  render () {
    const filteredTools = this.state.displayedCategory == 0
      ? this.props.tools
      : this.props.tools.filter((tool) => {
        return this.state.displayedCategory.includes(tool.categoryId)
      })
    return (
      <div className='tools-container'>
        <Tools
          filterCategory={this.filterCategory}
          filteredTools={filteredTools}
        />
      </div>
    )
  }
}
