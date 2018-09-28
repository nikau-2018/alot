import React from 'react'
import {Button, Form} from 'semantic-ui-react'

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
      <Button type='submit'>Sign In</Button>
    </div>
  </Form>
)

export default FormExampleForm
