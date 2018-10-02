import React, {Component} from 'react'
import axios from 'axios'
import {get} from '../Auth/utils/localstorage'
import {Loader, Message, Button} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

import ToolForm from '../ToolForm'

export default class EditTool extends Component {
  constructor (props) {
    super(props)
    this.state = {
      postErr: false
    }
  }

  componentDidMount () {
    this.props.fetchTools()
    this.props.fetchCategories()
  }

  toggleError = () => {
    this.setState({
      postErr: !this.state.postErr
    })
  }

  handleSubmit = (formObj, toolId) => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${get('token')}`
    axios
      .put(`/api/v1/tools/edit/${toolId}`, formObj)
      .then(this.props.history.goBack())
      .catch(() => {
        this.toggleError() // need to do proper error handling here eventually
      })
  }

  render () {
    if (this.props.ready && !this.state.postErr) {
    const toolId = Number(this.props.match.params.id)
    const selectedTool = this.props.tools.find((tool) => tool.id === toolId)
    const {name} = this.props.categories.find((category) => {
      return category.id === selectedTool.categoryId})
    return (
      <ToolForm
      goBack={this.props.history.goBack}
      handleSubmit={this.handleSubmit}
      categories={this.props.categories}
      editing={selectedTool}
      categoryName={name}
      parent='edit'/>
    )
    } else if (this.state.postErr) {
      return (
      <div>
        <Message warning>
          <Message.Header>There was an error submitting that tool to the database</Message.Header>
        </Message>
        <Link to={this.props.match.url}>
          <Button onClick={() => this.toggleError()}>Try Again</Button>
        </Link>
      </div>
    )
    } else {
      return <Loader active inline='centered'/>
    }
  }
}
