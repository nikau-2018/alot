import React from 'react'
import moment from 'moment'
import {Image, Button, Divider} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

import styles from './styles.css'

export default function WorkshopDetail (props) {
  const description = props.workshop.description || ''
  return (
    <div>
      <h1>{props.workshop.name}</h1>
      <Divider/>
      <Image src={props.workshop.image} size='large'/>
      <ul>{description.split('*').map(element => <li>{element}</li>)}</ul>
      <h3>Description:</h3>
      <p>{props.workshop.body}</p>
      <h3>Instructor: </h3>
      <p>{props.workshop.instructor}</p>
      <h3>Date:</h3>
      <p>{moment(props.workshop.dateTime).local().format('LLL')}</p>
      <p>{moment.utc(props.workshop.dateTime).fromNow()}</p>
      <Button as={Link} to={`/workshops/${props.workshop.categoryId}`} basic>Similar Workshops</Button>
      {props.isAdmin && <Button as={Link} to={`/edit/workshop/${props.workshop.id}`} basic>Edit Workshop</Button>}
    </div>
  )
}
