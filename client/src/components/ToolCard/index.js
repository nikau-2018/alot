import React, {Component} from 'react'
import {Card, Image} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

import styles from './styles.css'

export default class ToolCard extends Component {
  constructor (props) {
    super(props)
    this.state = {} // not sure if we will need state yet
  }

  render () {
    return (
      <Link to={`/tools/${this.props.category}/${this.props.id}`}>
        <Card>
          <Card.Content>
            <Card.Header>{this.props.name}</Card.Header>
            <Image src={this.props.image} />
            <Card.Description>{this.props.description}</Card.Description>
          </Card.Content>
        </Card>
      </Link>
    )
  }
}
