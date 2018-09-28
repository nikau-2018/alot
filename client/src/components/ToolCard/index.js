import React, {Component} from 'react'
import {Button, Card, Image} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

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
          <Link to={`/tools/${this.props.id}`}>
            <Image src={this.props.image} />
          </Link>
          <Card.Description>{this.props.description}</Card.Description>
        </Card.Content>
        <Link to={`/confirm/tool/${this.props.id}`}>
          <Button basic color='green'>
              Rent
          </Button>
        </Link>
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
