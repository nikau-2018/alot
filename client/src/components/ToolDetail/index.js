import React, {Component} from 'react'
import {Card, Image} from 'semantic-ui-react'

export default class ToolDetail extends Component {
  constructor (props) {
    super(props)
    this.state = {} // not sure if we will need state yet
  }

  render () {
    return (
      <div>
        {this.props.tool.name}
      </div>
    )
  }
}
