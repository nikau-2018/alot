import React, {Component} from 'react'

export default class EditEmployee extends Component {
  componentDidMount() {
    this.props.fetchUsers()
  }
  
}
