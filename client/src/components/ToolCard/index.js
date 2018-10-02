import React from 'react'
import {Card, Image, Icon} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

import styles from './styles.css'

export default function ToolCard (props) {
  return (
    <Link to={`/tools/${props.category}/${props.id}`}>
      <Card color={props.available ? 'green' : 'red'}>
        <Card.Content className={styles.tools}>
          <Card.Header>{props.name}</Card.Header>
          <Image src={props.image} />
          <Card.Description>{props.description}</Card.Description>
          <Card.Description>Available: {props.available ? <p><Icon name='check' /></p> : <p><Icon name='x' /></p>}</Card.Description>
        </Card.Content>
      </Card>
    </Link>
  )
}
