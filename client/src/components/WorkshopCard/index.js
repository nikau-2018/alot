import React, {Component} from 'react'
import {Card, Image} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

import styles from './styles.css'

export default class WorkshopCard extends Component {
  constructor (props) {
    super(props)
    this.state = {} // not sure if we will need state yet
  }

  render () {
    return (
      <Link to={`/workshops/${this.props.category}/${this.props.id}`}>
        <Card>
          <Card.Content>
            <Card.Header>{this.props.name}</Card.Header>
            <Image src={this.props.image} />
            <Card.Description><ul>{this.props.description.split('*').map(element => <li>{element}</li>)}</ul>
            </Card.Description>
          </Card.Content>
        </Card>
      </Link>
    )
  }
}
