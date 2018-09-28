import React, {Component} from 'react'
import {Card, Image} from 'semantic-ui-react'

export default class WorkshopCard extends Component {
  constructor (props) {
    super(props)
    this.state = {} // not sure if we will need state yet
    let array1 = this.props.description.split(', ')
    array1.forEach(function (element) {
      console.log(element)
    })

    // this gives an array of [ "2-3 hours", "kid-friendly" ] so now I need to mapp over it and add it to a bullet list
  }

  render () {
    return (
      <Card>
        <Card.Content>
          <Card.Header>{this.props.name}</Card.Header>
          <Image src={this.props.image} />
          <Card.Description>{this.props.description.split(', ')}
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
