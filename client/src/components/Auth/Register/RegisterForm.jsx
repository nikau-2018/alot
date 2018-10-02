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
          <h1>SIGN UP</h1>
          <div className={styles.inputs}>
            <Form.Input transparent
              name='firstName'
              placeholder='First Name'
              value={firstName}            
              onChange={this.handleChange}
              className={styles.input}
              icon='user'
              iconPosition='left'
            />
            <Form.Input transparent
              name='lastName'
              placeholder='Last Name'
              value={lastName}            
              onChange={this.handleChange}
              className={styles.input}
              icon='user'
              iconPosition='left'
            />
            <Form.Input transparent
              name='email'
              placeholder='Email'
              value={email}
              onChange={this.handleChange}
              className={styles.input}
              icon='mail'
              iconPosition='left'
            />
            <Form.Input transparent 
              name='phone'
              placeholder='Phone Number'
              value={phone}
              onChange={this.handleChange}
              className={styles.input}
              icon='phone'
              iconPosition='left'
            />
            <Form.Input transparent
              name='password'
              type='password'
              placeholder='********'
              value={password}            
              onChange={this.handleChange}
              className={styles.input}
              icon='lock'
              iconPosition='left'
            />
            <Form.Input transparent
              name='confirm'
              type='password'
              placeholder='********'
              value={confirm}            
              onChange={this.handleChange}
              className={styles.input}
              icon='lock'
              iconPosition='left'
            />
          </div>
          <ErrorMessage reducer='auth' />
          <Button onClick={this.handleClick} className={styles.button}>SIGN UP</Button><br />
          <div className={styles.p}>
            Already have an account? <Button onClick={this.handleSwitch} className={styles.switch}>Login</Button>
          </div>
      </Form>
      </div>
    )
  }
}