import React, {Component} from 'react'
import { Button, Card, Image } from 'semantic-ui-react'
import {Link} from 'react-router-dom'

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
          <Link to={`/confirm/tool/${randomTool.id}`}>
            <Button basic color='green'>
              Rent
            </Button>
          </Link>
        </Card>
      </div>
    )
  }
}
