import React, {Component} from 'react'
import {Button, Form, Dropdown} from 'semantic-ui-react'

import styles from './styles.css'

export default class EmployeeForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      employeeId: 0,
      firstName: '',
      lastName: '',
      phone: '',
      role: 1
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  componentDidMount() {
      let {id, email, firstName, lastName, phone, role} = this.props.employee
      this.setState({
        employeeId: id,
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone,
        role: role
      })
  }

  render () {
    const { firstName, lastName, email, description, body} = this.state
    let {error, employeeId, ...rest} = this.state
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
        <Button onClick={() => this.props.handleSubmit(rest, employeeId)}>Submit</Button>
        <Button onClick={() => this.props.goBack()}>Go Back</Button>
      </Form>
      </div>
    )
  }
}
