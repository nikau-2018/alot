import React from 'react'
import {Card, Image, Icon} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

import styles from './styles.css'

export default function ToolCard (props) {
  return (
    <Card 
      color={props.available ? 'green' : 'red'}
      as={Link} to={`/tools/${props.category}/${props.id}`}>
      <Card.Content>
        <Card.Header className={styles.header}>{props.name}</Card.Header>
        <Image src={props.image} />
        <Card.Description>{props.description}</Card.Description>
        <Card.Description>Available: {props.available ? <p><Icon name='check' /></p> : <p><Icon name='x' /></p>}</Card.Description>
      </Card.Content>
    </Card>
  )
}
