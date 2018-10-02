import React, {Component} from 'react'
import {Loader, Dimmer} from 'semantic-ui-react'

import EmployeeCard from '../EmployeeCard'

export default class EditEmployee extends Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }

  componentDidMount () {
    this.props.fetchUsers()
  }

  ready () {
    return (
    this.props.employees.map(employee => <EmployeeCard key={employee.id} employee={employee}/> )
    )
  }

  loading () {
    return <Dimmer active inverted><Loader inverted>Loading</Loader></Dimmer>
  }

  render () {
    return (
      <div>
        {this.props.ready ? this.ready() : this.loading()}
      </div>
    )
  }
}
