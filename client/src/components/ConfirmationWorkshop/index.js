import React from 'react'
import {Button, Divider, Icon, Item, Label, Image} from 'semantic-ui-react'
import {Link} from 'react-router-dom'


const ConfirmationWorkshop = (props) => (
  <div className='confirmation'>
  <h1>Confirm Your Workshop Booking</h1>
  <Divider/>
  <Image src={props.selectedWorkshop.image}/>
    <h2>{props.selectedWorkshop.name}</h2>
    <p>{props.selectedWorkshop.description}</p>
      <br/>
    <p>{props.selectedWorkshop.body}</p>
      <p>Are you sure you would like to attend this workshop?</p>
      <br/>
      <p>It will be held on {props.dateTime}</p>
      <Button.Group>
        <Link to='#'>
          <Button>Cancel</Button>
        </Link>
        <Button.Or />
        <Link to='#'>
          <Button positive>Confirm</Button>
        </Link>
      </Button.Group>
  </div>
)

export default ConfirmationWorkshop

// test at http://localhost:3000/confirm/workshop/88801