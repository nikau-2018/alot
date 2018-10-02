import React from 'react'
import {Button, Checkbox, Form} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import {pick, clone} from 'lodash'

import ErrorMessage from '../ErrorMessage'

import styles from './styles.css'

export default class RegisterForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      password: '',
      confirm: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    })
  }
  
  handleClick = (e) => {
    // we need to add some validation here
    const creds = {
      user: pick(clone(this.state), ['firstName', 'lastName', 'email', 'phone']),
      password: this.state.password
    }
    this.props.registerUser(creds)
  }

  handleSwitch = () => {
    console.log(this.props)
    this.props.callback('login')
  }

  render () {
    const {firstName, lastName, email, phone, password, confirm} = this.state
    return (
      <div className={styles.registerForm}>
        <Form>
          <h1>Create an Account</h1>
          <Form.Field>
            <input name='firstName'
            placeholder='First Name'
            value = {firstName}
            onChange={this.handleChange} />
          </Form.Field>
          <Form.Field>
            <input name='lastName'
            placeholder='Last Name'
            value = {lastName}
            onChange={this.handleChange} />
          </Form.Field>
          <Form.Field>
            <input name='email'
            placeholder='Email'
            value = {email}
            onChange={this.handleChange} />
          </Form.Field>
          <Form.Field>
            <input name='phone'
            placeholder='Phone Number'
            value={phone}
            onChange={this.handleChange} />
          </Form.Field>
          <Form.Field>
            <input name='password'
            type='password'
            placeholder='Password'
            value={password}
            onChange={this.handleChange} />
          </Form.Field>
          <Form.Field>
            <input name='confirm'
            type='password'
            placeholder='Password'
            value={confirm}
            onChange={this.handleChange} />
          </Form.Field>
          <ErrorMessage reducer='auth' />
          <Button onClick={this.handleClick}>Submit</Button><br /><br />
          <Button onClick={this.handleSwitch}>Already have an account?</Button>
      </Form>
      </div>
    )
  }
}