import React, {Component} from 'react'

export default class ToolsGallery extends Component {
  render () {
    const randomTool = this.props.tools[Math.floor(Math.random() * this.props.tools.length)]
    return (
      <div>
        <h1>What a tool!</h1>
        <p>{randomTool.name}</p>
        <p>{randomTool.description}</p>        
        <img src={`${randomTool.image}`} />
      </div>
    )
  }
}
