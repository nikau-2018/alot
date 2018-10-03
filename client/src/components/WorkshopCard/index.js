import React from 'react'
import {Card, Image} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

import styles from './styles.css'
import moment from 'moment'

export default function WorkshopCard (props) {
  return (
    <Card color='purple'
      as={Link} to={`/workshops/${props.category}/${props.id}`}>
      <Card.Content className={styles.header}>
        <Card.Header className={styles.headerText}>{props.name}</Card.Header>
      </Card.Content>
      <div className={styles.fixed}><Image src={props.image} size='medium' fluid centered className={styles.image}/></div>
      <Card.Content extra className={styles.content}>
        <Card.Description className={styles.description}>
          {props.body}
        </Card.Description>
      </Card.Content>
      <Card.Content extra className={styles.content}>
        <Card.Meta className={styles.Meta}>
          {moment(props.dateTime).local().format('LLL')}
        </Card.Meta>
      </Card.Content>
    </Card>
  )
}
