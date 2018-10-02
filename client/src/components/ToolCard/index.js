import React, {Component} from 'react'
import {Card, Image} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

import styles from './styles.css'

export default function ToolCard (props) {
  return (
    <Card as={Link} to={`/tools/${props.category}/${props.id}`}>
      <Card.Content>
        <Card.Header>{props.name}</Card.Header>
        <Image src={props.image} />
        <Card.Description>{props.description}</Card.Description>
      </Card.Content>
    </Card>
  )
}
