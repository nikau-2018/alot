
import React from 'react'
import {Button, Icon} from 'semantic-ui-react'

export default function AdminNav (props) {
  return (
    <div className='ui buttons'>
      <Button className='ui button' onClick={() => props.navigate('tool')}>
        <Icon name='wrench'/>
        Add Tool
      </Button>
      <Button className='ui button' onClick={() => props.navigate('workshop')}>
        <Icon name='calendar alternate'/>
        Add Workshop
      </Button>
      <Button className='ui button' onClick={() => props.navigate('employee')}>
        <Icon name='user plus'/>
        Edit Employee
      </Button>
      <Button className='ui button' onClick={() => props.navigate('orders')}>
        <Icon name='envelope'/>
        Maintain Orders
      </Button>
    </div>
  )
}
