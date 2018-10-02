import React, {Component} from 'react'
import {Button, Form} from 'semantic-ui-react'

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
      role: 1
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
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
    const { firstName, lastName, email, phone, } = this.state
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
