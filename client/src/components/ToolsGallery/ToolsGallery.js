import React, {Component} from 'react'

export default class ToolsGallery extends Component {
  componentDidMount () {
    this.props.fetchTools()
  }

  render () {
    console.log('this.props.tools', this.props.tools)

    return (
      <div>
        <h1>tools gallery</h1>
      </div>
    )
  }
}
