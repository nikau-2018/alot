import React from 'react'

import {Divider} from 'semantic-ui-react'

export default function ToolDetail (props) {
  return (
    <div>
      <h1>{props.tool.name}</h1>
      <Divider/>
      <img src={props.tool.image}/>
      <h3>Description:</h3>
      <p>{props.tool.description}</p>
    </div>
  )
}
