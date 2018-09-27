import React, {Component} from 'react'

// Components
import Tools from '../Tools'

export default class ToolsContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      displayedCategory: [
        77701, 77702, 77703, 77704
      ], // will need to be set from the store in redux not sure if the action & reducer for this belong with this component yet?
      tools: [{
        id: 55501,
        categoryId: 77702,
        name: 'lawn Mower',
        description: 'Ryobi 190cc....',
        image: '/placeholder-image.jpeg',
        active: true
      }]
    }
    this.filterCategory = this.filterCategory.bind(this)
  }

  componentDidMount () {
    this.props.fetchTools()
  }

  filterCategory (selectedCategory) {
    this.setState({
      displayedCategory: [Number(selectedCategory)]
    })
  }

  render () {
    const filteredTools = this.state.tools.filter((tool) => {
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
