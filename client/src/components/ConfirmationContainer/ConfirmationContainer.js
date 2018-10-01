import React, {Component} from 'react'

// Components
import ConfirmationTool from '../ConfirmationTool'
import ConfirmationWorkshop from '../ConfirmationWorkshop'
import Auth from '../Auth'

import styles from './styles.css'

export default class ConfirmationContainer extends Component {
  loggedIn () {
    const selectedId = Number(this.props.match.params.id)
    const [ selectedTool ] = this.props.tools.filter((tool) => selectedId === tool.id)
    const [ selectedWorkshop ] = this.props.workshops.filter((workshop) => selectedId === workshop.id)
    switch (this.props.match.params.type) {
      case 'tool':
        return <ConfirmationTool selectedTool={selectedTool}/>
      case 'workshop':
        return <ConfirmationWorkshop selectedWorkshop={selectedWorkshop}/>
    }
  }

  loggedOut () {
    return (
      <div className={styles.confirmationContainer}>
        <h2>Please login or register before continuing</h2>
        <Auth inline={true} />
      </div>
    )
  }

  render () {
    return (
      <div>
        {this.props.isAuthenticated ? this.loggedIn() : this.loggedOut()}
      </div>
    )
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
