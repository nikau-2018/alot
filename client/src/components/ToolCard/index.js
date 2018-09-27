import React, {Component} from 'react'
import {Card, Image} from 'semantic-ui-react'

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
          <Image src={this.props.image} />
          <Card.Description>{this.props.description}</Card.Description>
        </Card.Content>
      </Card>
    )
  }
}
