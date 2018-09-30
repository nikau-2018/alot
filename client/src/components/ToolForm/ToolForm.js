import React, {Component} from 'react'
import {Button, Form, Dropdown} from 'semantic-ui-react'

export default class LoginForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      category: null,
      description: '',
      image: 'https://www.fillmurray.com/200/300',
      active: true
    }
  }

  // submit will be handled by an inherited method from parent component

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render () {
    const { name, category, description } = this.state
    return (
      <Form>
        <Form.Field required>
          <label>Name:</label>
          <input
            name='name'
            placeholder='Tool Name'
            value={name}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field required>
          <label>Category:</label>
          <Dropdown.Menu>
            {this.props.cateogries.map(category => (
              <Dropdown.Item
                text={category.name}
                name={category.id}
                onClick={this.handleChange}
              />
            ))}
            <Dropdown.item>

            </Dropdown.item>
          </Dropdown.Menu>
          <input
            name='category'
            placeholder='Tool Category'
            value={category}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field required>
          <label>Description:</label>
          <input
            name='description'
            placeholder='Tool Description'
            value={description}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Button onClick={this.props.handleSubmit}>Submit</Button>
      </Form>
    )
  }
}
