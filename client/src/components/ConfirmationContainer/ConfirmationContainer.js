import React, {Component} from 'react'

// Components
import ConfirmationTool from '../ConfirmationTool'
import ConfirmationWorkshop from '../ConfirmationWorkshop'

export default class ConfirmationContainer extends Component {
  render () {
    const type = (this.props.match.params.type)
    const toolId = Number(this.props.match.params.id)
    const [ selectedTool ] = this.props.tools.filter((tool) => toolId === tool.id)
    switch (type) {
      case 'tool':
      return <ConfirmationTool selectedTool={selectedTool}/>
      case 'workshop':
      return <ConfirmationWorkshop />
    }
  }
}