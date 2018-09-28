import React, {Component} from 'react'
import { Button, Card, Image } from 'semantic-ui-react'

export default class ToolsGallery extends Component {
  componentDidMount () {
    this.props.fetchTools()
  }
  render () {
    const randomTool = this.props.tools[Math.floor(Math.random() * this.props.tools.length)]

    return (
      <div>
        <h3>What a tool...</h3>
        <Card>
          <a href={`/tools/${randomTool.id}`}>
            <Image src={`${randomTool.image}`} />
          </a>
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
