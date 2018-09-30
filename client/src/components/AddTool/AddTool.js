import React, {Component} from 'react'
import axios from 'axios'
import {get} from '../Auth/utils/localstorage'
import {Loader} from 'semantic-ui-react'

import ToolForm from '../ToolForm'

export default class AddTool extends Component {
  constructor (props) {
    super(props)
    this.state = {
      // could retrieve db table details here which may affect
      // how the form is rendered, if we want to make form multi purpose
    }
  }

  componentDidMount () {
    this.props.fetchCategories()
  }

  handleSubmit = (formState) => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${get('token')}`
    return axios
      .post('api/v1/tools/add', formState)
  }

  render () {
    if (this.props.ready) {
    return (
      <ToolForm
      handleSubmit={this.handleSubmit}
      categories={this.props.categories}/>
    )
    } else {
      return <Loader active inline='centered'/>
    }
  }
}