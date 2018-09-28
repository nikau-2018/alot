import React, {Component} from 'react'

// Components
import Tools from '../Tools'

export default class ToolsContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      displayedCategory: [], // will need to be set from the store in redux not sure if the action & reducer for this belong with this component yet?
      tools: []
    }
    this.filterCategory = this.filterCategory.bind(this)
  }

  componentDidMount () {
    this.props.fetchTools()
    this.props.fetchCategories()
  }

  componentDidUpdate (prevProps) {
    if (this.props.displayedCategory !== prevProps.displayedCategory) {
      this.setState({
        displayedCategory: this.props.displayedCategory
      })
    }
  }

  filterCategory (selectedCategory) {
    this.setState({
      displayedCategory: [Number(selectedCategory)]
    })
  }

  render () {
    const filteredTools = this.props.tools.filter((tool) => {
      return this.state.displayedCategory.includes(tool.categoryId)
    })
    return (
      <Tools
        filterCategory={this.filterCategory}
        filteredTools={filteredTools}
      />
    )
  }
}
