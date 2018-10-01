import React from 'react'
import {Button, Icon} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

import styles from './styles.css'

export default function AdminNav (props) {
  const url = props.url
  return (
    <div className={styles.adminNav}>
      <Link to={`${url}/add-tool`}>
        <Button className={styles.button}>
          <Icon name='wrench'/>
          Add Tool
        </Button>
      </Link>
      <Link to={`${url}/add-workshop`}>
        <Button className={styles.button}>
          <Icon name='calendar alternate'/>
          Add Workshop
        </Button>
      </Link>
      <Link to={`${url}/edit-employee`}>
        <Button className={styles.button}>
          <Icon name='user plus'/>
          Edit Employee
        </Button>
      </Link>
      <Link to={`${url}/orders`}>
        <Button className={styles.button}>
          <Icon name='envelope'/>
          Maintain Orders
        </Button>
      </Link>
    </div>
  )
}
