import React, {Component} from 'react'

// Components
import Tools from '../Tools'

export default class ToolsContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      displayedCategory: null
    }
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

  // filterCategory () {
  //   this.setState({
  //     displayedCategory: [Number(this.props.match.params.category)]
  //   })
  // }

  render () {
    console.log(this.props.match.params.category)
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
