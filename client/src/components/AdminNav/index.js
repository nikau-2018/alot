import React from 'react'
import {Button, Icon} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

export default function AdminNav (props) {
  const url = props.url
  return (
    <div className='ui buttons'>
      <Link to={`${url}/add-tool`}>
        <Button className='ui button'>
          <Icon name='wrench'/>
        Add Tool
        </Button>
      </Link>
      <Link to={`${url}/add-workshop`}>
        <Button className='ui button'>
          <Icon name='calendar alternate'/>
        Add Workshop
        </Button>
      </Link>
      <Link to={`${url}/edit-employee`}>
        <Button className='ui button'>
          <Icon name='user plus'/>
        Edit Employee
        </Button>
      </Link>
      <Link to={`${url}/orders`}>
        <Button className='ui button'>
          <Icon name='envelope'/>
        Maintain Orders
        </Button>
      </Link>
    </div>
  )
}
