import React, {Component} from 'react'
import axios from 'axios'
import {get} from '../Auth/utils/localstorage'
import {Loader} from 'semantic-ui-react'

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

  handleSubmit = (formObj) => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${get('token')}`
    return axios
      .post('api/v1/tools/add', formObj)
      .catch(err => {
        this.setState({postErr: true})
      })
  }

  render () {
    if (this.props.ready) {
    return (
      <ToolForm
      handleSubmit={this.handleSubmit}
      categories={this.props.categories}
      path={this.props.match.path}
      error={this.props.postErr}/>
    )
    } else {
      return <Loader active inline='centered'/>
    }
  }
}