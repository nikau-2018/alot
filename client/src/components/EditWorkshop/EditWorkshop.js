import React, {Component} from 'react'
import axios from 'axios'
import {get} from '../Auth/utils/localstorage'
import {Loader, Message, Button} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

import WorkshopForm from '../WorkshopForm'

export default class EditWorkshop extends Component {
  constructor (props) {
    super(props)
    this.state = {
      postErr: false
    }
  }

  componentDidMount () {
    this.props.fetchWorkshops()
    this.props.fetchCategories()
  }

  toggleError = () => {
    this.setState({
      postErr: !this.state.postErr
    })
  }

  handleSubmit = (formObj, workshopId) => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${get('token')}`
    axios
      .put(`/api/v1/workshops/edit/${workshopId}`, formObj)
      .then(this.props.history.goBack())
      .catch(() => {
        this.toggleError() // need to do proper error handling here eventually
      })
  }

  render () {
    if (this.props.ready && !this.state.postErr) {
    const workshopId = Number(this.props.match.params.id)
    const selectedWorkshop = this.props.workshops.find((workshop) => workshop.id === workshopId)
    const {name} = this.props.categories.find((category) => {
      return category.id === selectedWorkshop.categoryId})
    return (
      <WorkshopForm
      handleSubmit={this.handleSubmit}
      categories={this.props.categories}
      editing={selectedWorkshop}
      categoryName={name}
      parent='edit'/>
    )
    } else if (this.state.postErr) {
      return (
      <div>
        <Message warning>
          <Message.Header>There was an error submitting that workshop to the database</Message.Header>
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
