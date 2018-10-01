
import React from 'react'
import {Button, Icon} from 'semantic-ui-react'

export default function AdminNav (props) {
  return (
    <div className='ui buttons'>
      <Button className='ui button' onClick={props.handleClick}>
        <Icon name='wrench icon'/>
      Add Tool
      </Button>
      <Button className='ui button' onClick={props.handleClick}>
        <Icon name='calendar alternate icon'/>
      Add Workshop
      </Button>
      <Button className='ui button' onClick={props.handleClick}>
        <Icon name='user plus icon'/>
      Edit Employee
      </Button>
      <Button className='ui button' onClick={props.handleClick}>
        <Icon name='envelope icon'/>
      Maintain Orders
      </Button>
    </div>
  )
}
