import React, {Component} from 'react'
import {Loader, Dimmer} from 'semantic-ui-react'

export default class EditEmployee extends Component {
  componentDidMount () {
    this.props.fetchUsers()
  }

  ready () {
    return <div>test</div>
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
