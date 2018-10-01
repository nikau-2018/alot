import React from 'react'
import {Image, Button, Divider} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

import styles from './styles.css'

export default function ToolDetail (props) {
  const body = props.tool.body || ''
  const isAdmin = props.isAdmin
  return (
    <div>
      <h1>{props.tool.name}</h1>
      <Divider/>
      <Image src={props.tool.image} size='large' />
      <h3>{props.tool.description}</h3>
      <h4>Description:</h4>
      <ul>
        {body.split('*').map(element => <li>{element}</li>)}
      </ul>
      <Link to={`/confirm/tool/${props.tool.id}`}>
        <Button basic color='green'>Rent</Button>
      </Link>
      <Link to={`/tools/${props.tool.categoryId}`}>
        <Button basic>Similar Tools</Button>
      </Link>
      {isAdmin && <Button>Edit Tool</Button>}
    </div>
  )
}
