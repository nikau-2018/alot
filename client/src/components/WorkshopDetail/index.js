import React from 'react'

import {Divider} from 'semantic-ui-react'

export default function WorkshopDetail (props) {
  return (
    <div>
      <h1>{props.workshop.name}</h1>
      <Divider/>
      <img src={props.workshop.image}/>
      <h3>Date:</h3>
      <p>{props.workshop.dateTime}</p>
      <h3>Instructor: </h3>
      <p>{props.workshop.instructor}</p>
      <h3>Description:</h3>
      <p>{props.workshop.description}</p>
      <p>{props.workshop.body}</p>
    </div>
  )
}
