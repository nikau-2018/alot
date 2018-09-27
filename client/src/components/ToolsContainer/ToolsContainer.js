import React, {Component} from 'react'

export default class ToolsContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      displayedCategory: ''
    }
  }

  filterCategory (selectedCategory) {
    this.setState({
      displayedCategory: selectedCategory
    })
  }
  
}
