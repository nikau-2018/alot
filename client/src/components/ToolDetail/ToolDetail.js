import React from 'react'
import {Button, Divider} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

export default function ToolDetail (props) {
  const categoryName = this.state.categories.find(category => {
    return category.id == props.tool.categoryId
  }).name
  return (
    <div>

      <h1>{props.tool.name}</h1>
      <Divider/>
      <img src={props.tool.image}/>
      <h3>Description:</h3>
      <p>{props.tool.description}</p>
      <Link to={`/confirm/tool/${props.tool.id}`}>
        <Button basic color='green'>Rent</Button>
      </Link>
      <Link to={`/tools/${props.tool.categoryId}`}>
        <Button basic>{categoryName} Tools</Button>
      </Link>
    </div>
  )
}