import React from 'react'
import {Button, Checkbox, Form} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

const FormExampleForm = () => (
  <Form>
    <div className='register'>
      <h1> Create an Account </h1>
      <Form.Field>
        <label>First Name</label>
        <input placeholder='First Name' />
      </Form.Field>
      <Form.Field>
        <label>Last Name</label>
        <input placeholder='Last Name' />
      </Form.Field>
      <Form.Field>
        <label>Email</label>
        <input placeholder='Email' />
      </Form.Field>
      <Form.Field>
        <label>Phone Number</label>
        <input placeholder='Phone Number' />
      </Form.Field>
      <Form.Field>
        <label>Password</label>
        <input placeholder='Password' />
      </Form.Field>
      <Form.Field>
        <Checkbox label='By signing up, you agree with the Terms of Service and Privacy Policy' />
      </Form.Field>
      <Button type='sign up'>Sign Up</Button><br /><br />
      <Link to={'/Login'} className='button'>
        <Button type='Already'>Already have an account?</Button> </Link>
    </div>
  </Form>
)
import React from 'react'
import {connect} from 'react-redux'

import {registerUser, registerError} from './actions'
//import ErrorMessage from './ErrorMessage'

class RegisterForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      confirm: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleChange (e) {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    })
  }

  handleClick (event) {
    const {username, password, confirm} = this.state
    if (password !== confirm) {
      this.props.registerError('Passwords do not match!')
      return
    }
    const creds = {
      username: username.trim(),
      password: password.trim()
    }
    this.props.registerUser(creds)
  }

  render () {
    const {username, password, confirm} = this.state
    return (
      <div>
        <p><input name='username' placeholder='Username'
          onChange={this.handleChange} value={username} /></p>

        <p><input type='password' name='password' placeholder='Password'
          onChange={this.handleChange} value={password} /></p>

        <p><input type='password' name='confirm' placeholder='Confirm'
          onChange={this.handleChange} value={confirm} /></p>

        <button onClick={this.handleClick}>Register</button>

        {/* <ErrorMessage reducer='auth' /> */}
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    registerUser: (creds) => {
      return dispatch(registerUser(creds))
    },
    registerError: (message) => {
      dispatch(registerError(message))
    }
  }
}

export default connect(null, mapDispatchToProps)(RegisterForm)
