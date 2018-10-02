import React, {Component} from 'react'
import {Loader, Dimmer} from 'semantic-ui-react'

import Tools from '../Tools'

export default class ToolsContainer extends Component {
  componentDidMount () {
    this.props.fetchTools()
  }

  render () {
    if (this.props.ready) {
      const category = this.props.match.params.category
      const tools = this.props.tools.filter(tool => tool.name.toLowerCase().includes(this.props.searchTool.toLowerCase()))
      const filteredTools = !category
        ? tools
        : tools.filter((tool) => {
          return Number(category) === tool.categoryId
        })

      return (
        <div>
          <Tools
            filteredTools={filteredTools}
            category={category}
          />
        </div>
      )
    } else {
      return <Dimmer active inverted><Loader inverted>Loading</Loader></Dimmer>
    }
  }
}
