import React from 'react'
import {Image, Button, Divider} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

import styles from './styles.css'

export default function ToolDetail (props) {
  const body = props.tool.body || ''
  const isAdmin = props.isAdmin
  return (
    <div className={styles.toolDetail}>
      <h1>{props.tool.name}</h1>
      <Divider/>
      <Image src={props.tool.image} size='large' />
      <h3>{props.tool.description}</h3>
      <h4>Description:</h4>
      <ul>
        {body.split('*').map(element => <li>{element}</li>)}
      </ul>
      <Button as={Link} to={`/confirm/tool/${props.tool.id}`} basic color='green'>Rent</Button>
      <Button as={Link} to={`/tools/${props.tool.categoryId}`} basic>Similar Tools</Button>
      {isAdmin && <Button as={Link} to={`/edit/tool/${props.tool.id}`} basic>Edit Tool</Button>}
    </div>
  )
}
