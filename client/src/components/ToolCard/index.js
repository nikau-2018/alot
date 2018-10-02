import React from 'react'
import {Card, Image, Icon, Button} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

import styles from './styles.css'

export default function ToolCard (props) {
  return (
    <Card
      color={props.available ? 'green' : 'red'}
      as={Link} to={`/tools/${props.category}/${props.id}`}>
      <Card.Content className={styles.contentTop}>
        {/* <Button attached className={styles.header}>{props.name}</Button> */}
        <Card.Header className={styles.header}>{props.name}</Card.Header>
        <Image src={props.image} small verticalAlign='middle' spaced='left'/>
      </Card.Content>
      <Card.Content extra>
        <Card.Description className={styles.description}>{props.description}<br />
        Available: {props.available ? <Icon name='check' /> : <Icon name='x' />}

        </Card.Description>

      </Card.Content>
    </Card>
  )
}
