import React from 'react'
import {Card, Image} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

import styles from './styles.css'

export default function WorkshopCard (props) {
  return (
    <Card color='purple'
      as={Link} to={`/workshops/${props.category}/${props.id}`}>
      <Card.Content className={styles.header}>
        <Card.Header className={styles.headerText}>{props.name}</Card.Header>
      </Card.Content>
      <Image src={props.image} size='medium' fluid centered className={styles.image}/>
      <Card.Content extra className={styles.content}>
        <Card.Description className={styles.description}>
          <ul>
            {props.description.split('*').map(element => <li>{element}</li>)}
          </ul>
        </Card.Description>
      </Card.Content>
    </Card>
  )
}
