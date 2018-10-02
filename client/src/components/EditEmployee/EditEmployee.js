import React, {Component} from 'react'
import {Loader, Dimmer, Card} from 'semantic-ui-react'

import EmployeeCard from '../EmployeeCard'
import styles from './styles.css'

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
      this.props.employees.map(employee => {
        return (
          <div key={employee.id} className={styles.editEmployee}>
            <h2>Employees</h2>
            <Card.Group>
              <EmployeeCard key={employee.id} employee={employee}/>
            </Card.Group>
          </div>
        )
      })
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
