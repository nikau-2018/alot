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
      <Link to={`/workshops/${props.workshop.categoryId}`}>
        <Button basic>Similar Workshops</Button>
      </Link>
    </div>
  )
}
