import React, {Component} from 'react'
import {Loader, Dimmer, Card, Icon} from 'semantic-ui-react'

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
    this.props.employees.map((employee) => (
      // render employee cards here
    )
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
