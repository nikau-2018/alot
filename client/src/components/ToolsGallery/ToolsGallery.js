import React, {Component} from 'react'
import { Button, Card, Image } from 'semantic-ui-react'

// This component doesn't need to be stateful but for now I have left it as stateful because we could use state to display another image onClick.
export default class ToolsGallery extends Component {
  render () {
    const randomTool = this.props.tools[Math.floor(Math.random() * this.props.tools.length)]

    return (
    <Card>
      <Card.Content>
        <Image floated='right' size='medium' src={`${randomTool.image}`} />
        <Card.Header>{randomTool.name}</Card.Header>
        <Card.Meta>Friends of Elliot</Card.Meta>
        <Card.Description>
          Steve wants to add you to the group <strong>best friends</strong>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
            Approve
          </Button>
          <Button basic color='red'>
            Decline
          </Button>
        </div>
      </Card.Content>
    </Card>
      <div>
        <h2>What a tool!</h2>
        <h3>{randomTool.name}</h3>
        <a href={`/tools/${randomTool.id}`}><img src={`${randomTool.image}`} /></a>
      </div>
    )
  }
}
