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
      <div className={styles.users}>
        <h2>Users</h2>
        {this.props.users.map(user => {
          return (
            <div key={user.id} className={styles.editEmployee}>
              <Card.Group centered>
                <EmployeeCard key={user.id} user={user}/>
              </Card.Group>
            </div>
          )
        })}
      </div>
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
