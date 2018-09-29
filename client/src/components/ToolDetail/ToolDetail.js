import React from 'react'
import {Image, Button, Divider} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

export default function ToolDetail (props) {
  return (
    <div>
      <h1>{props.tool.name}</h1>
      <Divider/>
      <Image src={props.tool.image} size='large' />
      <h3>Description:</h3>
      <p>{props.tool.description}</p>
      <Link to={`/confirm/tool/${props.tool.id}`}>
        <Button basic color='green'>Rent</Button>
      </Link>
      <Link to={`/tools/${props.tool.categoryId}`}>
        <Button basic>Tools</Button>
      </Link>
    </div>
  )
}