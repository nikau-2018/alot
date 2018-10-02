import React from 'react'
import {Button, Icon} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

import styles from './styles.css'

export default function AdminNav (props) {
  const url = props.url
  return (
    <div className={styles.adminNav}>
      <Button as={Link} to={`${url}/add-tool`} className={styles.button}>
        <Icon name='wrench'/>
        Add Tool
      </Button>
      <Button as={Link} to={`${url}/add-workshop`} className={styles.button}>
        <Icon name='calendar alternate'/>
        Add Workshop
      </Button>
      <Button as={Link} to={`${url}/edit-employee`} className={styles.button}>
        <Icon name='user plus'/>
        Edit Employee
      </Button>
      <Button as={Link} to={`${url}/orders`} className={styles.button}>
        <Icon name='envelope'/>
        Maintain Orders
      </Button>
    </div>
  )
}
