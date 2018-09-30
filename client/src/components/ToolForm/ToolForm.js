import React, {Component} from 'react'
import {Button, Form} from 'semantic-ui-react'

export default class LoginForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      category: '',
      description: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render () {
    return (
      <Form>
        <Form.Field>
          <label>Name:</label>
          <input
          name='name'
          placeholder='Tool Name'
          onChange={this.handleChange}/>
        </Form.Field>
        <Form.Field>
          <label>Category:</label>
          <input
          name='category'
          placeholder='Tool Category'
          onChange={this.handleChange}/>
        </Form.Field>
        <Form.Field>
          <label>Description:</label>
          <input
          name='description'
          placeholder='Tool Description'
          onChange={this.handleChange}/>
        </Form.Field>
      </Form>
    )
  }
}
