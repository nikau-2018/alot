import React from 'react'
import {Button, Divider, Image, Form, TextArea} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

import styles from './styles.css'

export default class ConfirmationTool extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      tool: {},
      notes: ''
    }
  }

  componentDidMount () {
    this.setState({tool: this.props.selectedTool})
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

  render () {
    const tool = this.state.tool
    const returnPath = `/tools/${tool.categoryId}/${tool.id}`
    return (
      <div className='confirmation'>
        <h1>Confirm Your Tool Rental</h1>
        <Divider/>
        <Link to={`/tools/${tool.id}`}>
          <Image
            src={tool.image}
            size='small'
          />
        </Link>
        <h2>{tool.name}</h2>
        <p>Would like to rent this tool?</p>
        <p>It will be available for collection from 9am Monday - Friday</p>
        <Form>
          <Form.Field>
          <label>Order notes:</label>
          <TextArea name='notes'
            placeholder='Order notes'
            onChange={this.handleChange} rows='3' style='resize:'/>
        </Form.Field>
        </Form>
        <Button.Group>
          <Link to='#'>
            <Button positive>Confirm</Button>
          </Link>
          <Button.Or />
          <Link to={returnPath}>
            <Button>Cancel</Button>
          </Link>
        </Button.Group>
      </div>
    )
  }
}
