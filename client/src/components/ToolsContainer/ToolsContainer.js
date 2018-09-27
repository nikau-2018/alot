import React, {Component} from 'react'

export default class ToolsContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      displayedCategory: [
        'Sewing', 'Gardening', 'Painting', 'Woodwork'
      ],// will be set from the store in redux
      Tools: []
    }
  }

  filterCategory (selectedCategory) {
    this.setState({
      displayedCategory: selectedCategory
    })
  }

  render() {
    displayedCategory.map((category) => {
      <ToolCard
      key={}
      name={}
      image={}
      description={}/>
    })
    return (

    )
  }
}
