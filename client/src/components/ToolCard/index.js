import React, {Component} from 'react'
import {Button, Card, Image} from 'semantic-ui-react'

export default class ToolCard extends Component {
  constructor (props) {
    super(props)
    this.state = {} // not sure if we will need state yet
  }

  render () {
    return (
      <Card>
        <Card.Content>
          <Card.Header>{this.props.name}</Card.Header>
          <a href={`/tools/${this.props.id}`}>
            <Image src={this.props.image} />
          </a>
          <Card.Description>{this.props.description}</Card.Description>
        </Card.Content>
        <Button basic color='green'>
            Rent
        </Button>
      </Card>
    )
  }
}

// Default props until dummy data comes in, to remove later
ToolCard.defaultProps = {
  name: 'Saw',
  description: 'it cuts stuff',
  image: 'https://www.worx.com/media/catalog/product/w/x/wx429-1.1458148644.jpg'
}
