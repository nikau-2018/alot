import React from 'react'
import {Image, Button, Divider, Grid} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

import styles from './styles.css'

export default function ToolDetail (props) {
  const body = props.tool.body || ''
  const isAdmin = props.isAdmin
  return (
    <div className={styles.toolDetail}>
      <Image src={props.tool.image} size='large' centered />
      <h1 className={styles.h1}>{props.tool.name}</h1>
      <h3 className={styles.h3}>{props.tool.description}</h3>
      {
        props.tool.available
          ? <Button as={Link} to={`/confirm/tool/${props.tool.id}`} basic color='green'>Reserve</Button>
          : <Button basic color='red'>Not available</Button>
      }
      <Button as={Link} to={`/tools/${props.tool.categoryId}`} basic>Similar Tools</Button>
      {isAdmin && <Button as={Link} to={`/edit/tool/${props.tool.id}`} basic>Edit Tool</Button>}
      <Grid columns={2} >
        <Grid.Row>
          <Grid.Column>
            <h5 className={styles.h5one}>In Library: {props.tool.stocked}</h5>
          </Grid.Column>
          <Grid.Column>
            <h5 className={styles.h5two}>Available: {props.tool.available}</h5>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Divider/>
      <h4 className={styles.h4}>Product Description</h4>
      <div className={styles.bullets}>
        <ul>
          {body.split('*').map(element => <li className={styles.li}>{element}</li>)}
        </ul>
      </div>
    </div>
  )
}
