import React from 'react'
import {Button, Divider, Image, Form, TextArea} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import axios from 'axios'

import {get} from '../Auth/utils/localstorage'

import styles from './styles.css'

export default class ConfirmationTool extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      tool: {},
      notes: '',
      submitted: false
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

  handleSubmit = () => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${get('token')}`
    return axios
      .post('/api/v1/orders/create', {
        toolId: this.state.tool.id,
        notes: this.state.notes
      })
      .then(() => {
        this.setState({submitted: true})
      })
      .catch((err) => {
        console.log(err)
      })
  }

  submitted () {
    return (
      <div>Order submitted succesfully.</div>
    )
  }

  pending () {
    const tool = this.state.tool
    const returnPath = `/tools/${tool.categoryId}/${tool.id}`
    return (
      <div className={styles.confirmationTool}>
        <h1>Confirm Your Tool Rental</h1>
        <Divider/>
        <Link to={`/tools/${tool.id}`}>
          <Image
            src={tool.image}
            size='medium'
            centered
          />
        </Link>
        <h2>{tool.name}</h2>
        <p>Would like to rent this tool?</p>
        <p>It will be available for collection from 9am Monday - Friday</p>
        <Form className={styles.form}>
          <Form.Field>
          <label>Order Notes</label>
          <TextArea name='notes'
            placeholder='Order notes'
            onChange={this.handleChange} 
            rows='3'
          />
        </Form.Field>
        </Form>
        <Button.Group className={styles.buttons}>
          <Link to='#'>
            <Button positive
            onClick={() => this.handleSubmit()}>Confirm</Button>
          </Link>
          <Button.Or />
          <Link to={returnPath}>
            <Button>Cancel</Button>
          </Link>
        </Button.Group>
      </div>
    )
  }

  render () {
    return (
    <div className={styles.confirmationTool}>
    {this.state.submitted ? this.submitted() : this.pending()}
    </div>
    )
  }
}
