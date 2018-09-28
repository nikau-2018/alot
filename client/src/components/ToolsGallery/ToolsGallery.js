import React, {Component} from 'react'
import { Button, Card, Image } from 'semantic-ui-react'

// This component doesn't need to be stateful but for now I have left it as stateful because we could use state to display another image onClick.
export default class ToolsGallery extends Component {
  render () {
    const randomTool = this.props.tools[Math.floor(Math.random() * this.props.tools.length)]

    return (
      <div>
        <h3>What a tool...</h3>
        <Card>
          <a href={`/tools/${randomTool.id}`}><Image src={`${randomTool.image}`} /></a>
          <Card.Content>
            <Card.Header>{randomTool.name}</Card.Header>
            <Card.Meta>{randomTool.description}</Card.Meta>
          </Card.Content>
          <Button basic color='green'>
            Rent
          </Button>
        </Card>
      </div>
    )
  }
}
