
import React, {Component} from 'react'
import {Button} from 'semantic-ui-react'

export default class AdminNav extends Component {
  constructor (props) {
    super(props)
    this.state = {} // not sure what state we will need
  }

  render () {
    return (
      <div className='ui buttons'>
        <Button className='ui button' onClick=''>
          <i className='fire extinguisher icon'></i>
      Add Tool
        </Button>
        <Button className='ui button' onClick=''>
          <i className='calendar alternate icon'></i>
      Add Workshop
        </Button>
        <Button className='ui button' onClick=''>
          <i className='user plus icon'></i>
      Edit Employee
        </Button>
        <Button className='ui button' onClick=''>
          <i className='envelope icon'></i>
      Maintain Orders
        </Button>
      </div>
    )
  }
}
