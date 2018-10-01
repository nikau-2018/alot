import React from 'react'

import {Image, Divider} from 'semantic-ui-react'

import styles from './styles.css'

export default function WorkshopDetail (props) {
  const description = props.workshop.description || ''
  return (
    <div>
      <h1>{props.workshop.name}</h1>
      <Divider/>
      <Image src={props.workshop.image}/>
      <ul>{description.split('*').map(element => <li>{element}</li>)}</ul>
      <h3>Description:</h3>
      <p>{props.workshop.body}</p>
      <h3>Instructor: </h3>
      <p>{props.workshop.instructor}</p>
      <h3>Date:</h3>
      <p>{props.workshop.dateTime}</p>
    </div>
  )
}
