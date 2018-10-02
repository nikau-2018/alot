import React, {Component} from 'react'

export default class EditEmployee extends Component {
  componentDidMount () {
    this.props.fetchUsers()
  }

  render () {
    console.log(this.props.employees)
    return (
      <div>test</div>
    )
  }
}
