import React, {Component} from 'react'
import {Card, Image} from 'semantic-ui-react'

export default class WorkshopCard extends Component {
  constructor (props) {
    super(props)
    this.state = {} // not sure if we will need state yet
  }

  render () {
    return (
      <Card>
        <Card.Content>
          <Card.Header>{this.props.name}</Card.Header>
          <Image src={this.props.image} />
          <Card.Description>{this.props.description}
          </Card.Description>
        </Card.Content>
      </Card>
    )
  }
}

// Default props until dummy data comes in, to remove later
WorkshopCard.defaultProps = {
  image: '/placeholder-image.jpeg',
  name: 'Build a Birdhouse Workshop',
  description: '2-3 hours, kid-friendly'
}
