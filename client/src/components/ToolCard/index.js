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
      </Card.Content>
      <Image src={props.image} size='medium' centered className={styles.image}/>
      <Card.Content extra className={styles.content}>
        <Card.Description className={styles.description}>
          {props.description}
        </Card.Description>
        <span className={styles.available}>
        Available: {props.available ? <Icon name='check' /> : <Icon name='x' />}
        </span>
      </Card.Content>
    </Card>
  )
}
