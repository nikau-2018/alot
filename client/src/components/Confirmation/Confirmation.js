import React, {Component} from 'react'
import {Container} from 'semantic-ui-react'

export default class Confirmation extends Component {
  render (props) {
    const toolId = Number(props.match.params.id)
    const selectedTool = props.tools.filter((tool) => toolId === tool.id)
    return (
      <Container>
        <div className='confirmation'>
          <p>Are you sure you would like to rent {selectedTool.name}?</p>
        </div>
      </Container>
    )
  }
}
