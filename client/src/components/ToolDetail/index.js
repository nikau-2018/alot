import React from 'react'
import {Button, Divider} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

export default function ToolDetail (props) {
  return (
    <div>
      <h1>{props.tool.name}</h1>
      <Divider/>
      <img src={props.tool.image}/>
      <h3>Description:</h3>
<<<<<<< HEAD
      <div>
        {props.tool.description}
      </div>
      <Button basic color='green'>Rent</Button>
=======
      <p>{props.tool.description}</p>
      <Link to={`/confirm/tool/${props.tool.id}`}>
        <Button basic color='green'>Rent</Button>
      </Link>
>>>>>>> 42510f3df82f261d97f5b743c75743c8626f19c5
    </div>
  )
}
