
import React from 'react'
import {Button} from 'semantic-ui-react'

export default function AdminNav (props) {
  return (
    <div className='ui buttons'>
      <Button className='ui button' onClick={props.handleClick}>
        <i className='fire extinguisher icon'></i>
      Add Tool
      </Button>
      <Button className='ui button' onClick={props.handleClick}>
        <i className='calendar alternate icon'></i>
      Add Workshop
      </Button>
      <Button className='ui button' onClick={props.handleClick}>
        <i className='user plus icon'></i>
      Edit Employee
      </Button>
      <Button className='ui button' onClick={props.handleClick}>
        <i className='envelope icon'></i>
      Maintain Orders
      </Button>
    </div>
  )
}
