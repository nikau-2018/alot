import React, {Component} from 'react'

export default class ToolDetail extends Component {
  constructor (props) {
    super(props)
    this.state = {} // not sure if we will need state yet
  }
  render () {
    return (
      <div>
        <h1>{this.props.tool.name}</h1>
        <img src={this.props.tool.image}/>
        <h3>Description:</h3>
        <p>{this.props.tool.description}</p>
      </div>
    )
  }
}
