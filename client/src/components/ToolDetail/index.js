import React from 'react'

import { Button, Divider } from 'semantic-ui-react'

export default function ToolDetail (props) {
  return (
    <div>
      <h1>{props.tool.name}</h1>
      <Divider/>
      <img src={props.tool.image}/>
      <h3>Description:</h3>
      <div>
        {props.tool.description}
      </div>
      <Button basic color='green'>Rent</Button>
    </div>
  )
}
