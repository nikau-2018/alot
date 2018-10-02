import React, {Component} from 'react'
import {Button, Form} from 'semantic-ui-react'
import axios from 'axios'
import {get} from '../Auth/utils/localstorage'

import styles from './styles.css'

export default class EmployeeForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      employeeId: 0,
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      role: 1,
      postErr: false
    }
  }

  componentDidMount() {
    if(this.props.ready){
    const employee = this.props.employees.find((employee) => Number(this.props.match.params.id) === employee.id)
      let {id, email, firstName, lastName, phone, role} = employee
      this.setState({
        employeeId: id,
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone,
        role: role
      })
    }
  }

  toggleError = () => {
    this.setState({
      postErr: !this.state.postErr
    })
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }


  handleSubmit = (formObj, userId) => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${get('token')}`
    axios
      .put(`/api/v1/users/edit/${userId}`, formObj)
      .then(this.props.history.goBack())
      .catch(() => {
        this.toggleError() // need to do proper error handling here eventually
      })
  }

  render () {
    return (
      this.state.postErr ? this.showError() : this.showForm()
    )
  }

  // shows by default
  showForm () {
    const { firstName, lastName, email, phone, } = this.state
    let {postErr, employeeId, ...rest} = this.state
    return (
      <div className={styles.employeeForm}>
      <h2>Edit this employee:</h2>
      <Form>
        <Form.Field required>
          <label>First Name</label>
          <input
            name='firstName'
            placeholder='First Name'
            value={firstName}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field required>
          <label>Last Name</label>
          <input
            name='lastName'
            placeholder='Last Name'
            value={lastName}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field required>
          <label>Email</label>
          <input
            name='email'
            placeholder='email address'
            value={email}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field required>
          <label>Phone</label>
          <input
            name='phone'
            placeholder='Phone Number'
            value={phone}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Button onClick={() => this.handleSubmit(rest, employeeId)}>Submit</Button>
        <Button onClick={() => this.props.history.goBack()}>Go Back</Button>
      </Form>
      </div>
    )
  }

  // shows on form submit error
  showError () {
    return (
      <div>
        <Message warning>
          <Message.Header>There was an error updating that employee</Message.Header>
        </Message>
        <Link to={this.props.match.url}>
          <Button onClick={() => this.toggleError()}>Try Again</Button>
        </Link>
      </div>
    )
  }

}