import React from 'react'
import {Button, Divider, Icon, Image} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

import styles from './styles.css'

const ConfirmationWorkshop = (props) => (
  <div className={styles.confirmationWorkshop}>
    <h1>Confirm Your Workshop Booking</h1>
    <Divider/>
    <Image src={props.selectedWorkshop.image}
      size='small'
    />
    <h2>{props.selectedWorkshop.name}</h2>
    <h4><Icon circular name='user circle' /> lead by: {props.selectedWorkshop.instructor}</h4>
    <p>{props.selectedWorkshop.description}</p>
    <h4><Icon circular name='question' /> about this workshop:</h4>
    <p>{props.selectedWorkshop.body}</p>
    <h4><Icon circular name='clock' /> scheduled time:</h4>
    <p>To be held on {props.dateTime}</p>
    <p>Would like to attend this workshop?</p>
    <br/>
    <Button.Group>
      <Link to='#'>
        <Button positive>Confirm</Button>
      </Link>
      <Button.Or />      
      <Link to='#'>
        <Button>Cancel</Button>
      </Link>
    </Button.Group>
  </div>
)

export default ConfirmationWorkshop

// test at http://localhost:3000/confirm/workshop/88801
