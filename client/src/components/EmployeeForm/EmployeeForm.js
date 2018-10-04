import React, {Component} from 'react'
import {Button, Form, Input} from 'semantic-ui-react'
import axios from 'axios'
import {get} from '../Auth/utils/localstorage'

import styles from './styles.css'

export default class EmployeeForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      userId: 0,
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
    const user = this.props.users.find((user) => Number(this.props.match.params.id) === user.id)
      let {id, email, firstName, lastName, phone, role} = user
      this.setState({
        userId: id,
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
    const { firstName, lastName, email, phone, role} = this.state
    let {postErr, userId, ...rest} = this.state
    return (
      <div className={styles.employeeForm}>
      <h2 className={styles.header}>Edit this User:</h2>
      <Form>
      <Form.Field className={styles.field} required>
          <p className={styles.label}>Role</p>
          <Form.Input
            transparent
            className={styles.input}
            name='role'
            placeholder='Role'
            value={role}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field className={styles.field} required>
          <p className={styles.label}>First Name</p>
          <Form.Input
            transparent
            className={styles.input}
            name='firstName'
            placeholder='First Name'
            value={firstName}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field className={styles.field} required>
          <p className={styles.label}>Last Name</p>
          <Form.Input
            transparent
            className={styles.input}
            name='lastName'
            placeholder='Last Name'
            value={lastName}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field className={styles.field} required>
          <p className={styles.label}>Email</p>
          <Form.Input
            transparent
            className={styles.input}
            name='email'
            placeholder='email address'
            value={email}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field className={styles.field} required>
          <p className={styles.label}>Phone</p>
          <Form.Input
            transparent
            className={styles.input}
            name='phone'
            placeholder='Phone Number'
            value={phone}
            onChange={this.handleChange}
          />
        </Form.Field>
        <div className={styles.buttonContainer}>
          <Button className={styles.submit} onClick={() => this.handleSubmit(rest, userId)}>Submit</Button>
          <Button className={styles.back} onClick={() => this.props.history.goBack()}>Go Back</Button>
        </div>
      </Form>
      </div>
    )
  }

  // shows on form submit error
  showError () {
    return (
      <div>
        <Message warning>
          <Message.Header>There was an error updating that user</Message.Header>
        </Message>
        <Link to={this.props.match.url}>
          <Button onClick={() => this.toggleError()}>Try Again</Button>
        </Link>
      </div>
    )
  }

}