import React, { Component } from 'react'
import {Divider} from 'semantic-ui-react'

import Welcome from '../Welcome'
// import ToolCard from '../ToolCard'

export default class WelcomeContainer extends Component {
  render () {
    // const randomTool = this.props.tools[Math.floor(Math.random() * this.props.tools.length)]
    return (
      <div className='welcome-container' >
        <Welcome />
        {/* <Divider />
        <h3>What a tool...</h3>
        <ToolCard
          key={randomTool.id}
          id={randomTool.id}
          name={randomTool.name}
          image={randomTool.image}
          description={randomTool.description}
          category={randomTool.categoryId}
        /> */}
      </div>
    )
  }
}
