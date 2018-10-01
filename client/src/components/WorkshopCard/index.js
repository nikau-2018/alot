import React, {Component} from 'react'
import {Card, Image} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

import styles from './styles.css'

export default function ToolCard (props) {
  return (
    <Link to={`/workshops/${props.category}/${props.id}`}>
      <Card>
        <Card.Content>
          <Card.Header>{this.props.name}</Card.Header>
          <Image src={this.props.image} />
          <Card.Description>
            <ul>
              {this.props.description.split('*').map(element => <li>{element}</li>)}
            </ul>
          </Card.Description>
        </Card.Content>
      </Card>
    </Link>
  )
}
