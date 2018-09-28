import React, {Component} from 'react'

// Components
import ToolDetail from '../ToolDetail'

export default class ToolsContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      tool: {}
    }
  }

  componentDidMount () {
    this.props.fetchTools()
      .then(() => {
        const [tool] = this.props.tools.filter(t => {
          return t.id === Number(this.props.match.params.id)
        })
        this.setState({tool})
      })
  }

  render () {
    return (
      <div>
        {this.state.tool && <ToolDetail tool={this.state.tool} />}
      </div>
    )
  }
}
