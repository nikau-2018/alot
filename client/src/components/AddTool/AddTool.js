import React, {Component} from 'react'

import ToolForm from '../ToolForm'

export default class AddTool extends Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }

  handleSubmit = (e) {
    
  }

  render () {
    return (
      <ToolForm handleSubmit={this.handleSubmit}/>
    )
  }
}