import React, {Component} from 'react'

// Components
import ConfirmationTool from '../ConfirmationTool'
import ConfirmationWorkshop from '../ConfirmationWorkshop'

export default class ConfirmationContainer extends Component {
  render () {
    const type = (this.props.match.params.type)
    const selectedId = Number(this.props.match.params.id)
    const [ selectedTool ] = this.props.tools.filter((tool) => selectedId === tool.id)
    const [ selectedWorkshop ] = this.props.workshops.filter((workshop) => selectedId === workshop.id)
    switch (type) {
      case 'tool':
        return <ConfirmationTool selectedTool={selectedTool}/>
      case 'workshop':
        return <ConfirmationWorkshop selectedWorkshop={selectedWorkshop}/>
    }
  }
}

ConfirmationContainer.defaultProps = {
  workshops: [{
    id: 88801,
    categoryId: 77701,
    name: 'Basic Sewing Workshop',
    description: '1-2 hours, great for beginners',
    body: 'In this workshop you will learn how to use a sewing machine and the stitching basics',
    image: '/placeholder-image.jpeg',
    instructor: 'Mary Valentine',
    dateTime: null
  }]
}
