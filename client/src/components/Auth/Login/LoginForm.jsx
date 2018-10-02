import React from 'react'
import {Button, Form} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

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
            <h1>LOGIN</h1>
            <div className={styles.inputs}>
              <Form.Input transparent
                name='email'
                placeholder='Email'
                onChange={this.handleChange}
                className={styles.input}
                icon='mail'
                iconPosition='left'
              />
              <Form.Input transparent
                name='password'
                type='password'
                placeholder='Password'
                onChange={this.handleChange}
                className={styles.input}
                icon='lock'
                iconPosition='left'
              />
            </div>
            <Button onClick={this.handleClick} className={styles.button}>SIGN IN</Button><br />
            <ErrorMessage reducer='auth' />
            <div className={styles.p}>
              Don't have an account? <Button onClick={this.handleSwitch} className={styles.switch}>Sign Up</Button>
            </div>
        </Form>
      </div>      
    )
  }
}
