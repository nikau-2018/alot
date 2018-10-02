import React from 'react'
import {Button, Form} from 'semantic-ui-react'

import ErrorMessage from '../ErrorMessage'

import styles from './styles.css'

export default class LoginForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    })
  }

  handleClick = () => {
    const {email, password} = this.state
    const creds = {
      email: email.trim(),
      password: password.trim()
    }
    this.props.loginUser(creds)
  }

  handleSwitch = () => {
    console.log(this.props)
    this.props.callback('register')
  }

  render () {
    return (
      <div className={styles.loginForm}>
        <Form>
            <h1>Login</h1>
            <Form.Field>
              <label>Email</label>
              <input name='email'
                placeholder='Email'
                onChange={this.handleChange} />
            </Form.Field>
            <Form.Field>
              <label>Password</label>
              <input name='password'
                type='password'
                placeholder='Password'
                onChange={this.handleChange} />
            </Form.Field>
            <Button onClick={this.handleClick}>Submit</Button>
            <ErrorMessage reducer='auth' />
            <Button onClick={this.handleSwitch}>Need an account?</Button>
        </Form>
      </div>      
    )
  }
}
