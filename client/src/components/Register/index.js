import React from 'react'
import {Button, Checkbox, Form} from 'semantic-ui-react'

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
        <Checkbox label='By signing up, you agree with the agree to the Terms of Service and Privacy Policy' />
      </Form.Field>
      <Button type='submit'>Sign Up</Button>
    </div>
  </Form>
)

export default FormExampleForm
