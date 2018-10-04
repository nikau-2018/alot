import React from 'react'
import moment from 'moment'
import {Image, Button} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

import styles from './styles.css'

export default function WorkshopDetail (props) {
  const description = props.workshop.description || ''
  const isAdmin = props.isAdmin
  return (
    <div className={styles.workshopDetail}>
      <h1 className={styles.h1}>{props.workshop.name}</h1>
      <h3 className={styles.h3}>Date: {moment(props.workshop.dateTime).local().format('LLL')} ({moment.utc(props.workshop.dateTime).fromNow()})</h3>
      <Image src={props.workshop.image} size='large' centered />
      <div className={styles.bullets}>
        <ul>{description.split('*').map(element => <li>{element}</li>)}</ul>
      </div>
      <h3>Description:</h3>
      <p>{props.workshop.body}</p>
      <h3>Instructor: </h3>
      <p>{props.workshop.instructor}</p>
      <Button as={Link} to={`/workshops/${props.workshop.categoryId}`} className={styles.button}>SIMILAR WORKSHOPS</Button>
      {isAdmin && <Button as={Link} to={`/edit/workshop/${props.workshop.id}`} basic>Edit Workshop</Button>}
    </div>
  )
}
