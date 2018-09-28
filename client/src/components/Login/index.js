import React from 'react'
import {Button, Form} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

const FormExampleForm = () => (
  <Form>
    <div className='register'>
      <h1> Sign in with Email </h1>
      <Form.Field>
        <label>Email</label>
        <input placeholder='Email' />
      </Form.Field>
      <Form.Field>
        <label>Password</label>
        <input placeholder='Password' />
      </Form.Field>
      <Button type='sign in'>Sign In</Button> <br /><br />
      <Link to={'/Register'} className='button'>
        <Button type='Need'>Need an account?</Button> </Link>
    </div>
  </Form>
)

export default FormExampleForm
