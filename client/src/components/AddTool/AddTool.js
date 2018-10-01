import React, {Component} from 'react'
import axios from 'axios'
import {get} from '../Auth/utils/localstorage'
import {Loader, Message, Button} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

import ToolForm from '../ToolForm'

export default class AddTool extends Component {
  constructor (props) {
    super(props)
    this.state = {
      postErr: false
    }
  }

  componentDidMount () {
    this.props.fetchCategories()
  }

  toggleError = ()=> {
    this.setState({
      postErr: !this.state.postErr
    })
  }

  handleSubmit = (formObj) => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${get('token')}`
    return axios
      .post('/api/v1/tools/add', formObj)
      // redirect back to admin page here? .then() 
      .catch(() => {
        this.toggleError()
      })
  }

  render () {
    if (this.props.ready && !this.state.postErr) {
    return (
      <ToolForm
      handleSubmit={this.handleSubmit}
      categories={this.props.categories}/>
    )
    } else if (this.state.postErr) {
      return (
      <div>
        <Message warning>
          <Message.Header>There was an error adding that tool to the database</Message.Header>
        </Message>
        <Link to={this.props.match.path}>
          <Button onClick={() => this.toggleError()}>Try Again</Button>
        </Link>
      </div>
    )
    } else {
      return <Loader active inline='centered'/>
    }
  }
}
