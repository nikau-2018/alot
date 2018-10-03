import React from 'react'
import {Card, Icon, Button} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

import styles from './styles.css'

export default function EmployeeCard (props) {
  const user = props.user
  return (
    <div>
      <Card className={styles.employeeCard}>
        <Card.Content>
          <Card.Header className={styles.header}>
            {user.firstName}<br />
          </Card.Header>
          <Card.Description className={styles.description}>
            <Icon name='user' /> {user.firstName} {user.lastName}<br />
            <Icon name='mail' /><a href={`mailto:${user.email}`}> {user.email}</a><br />
            <Icon name='phone' /><a href={`tel:${user.phone}`}> {user.phone}</a><br /><br />
          </Card.Description>
          <Button as={Link} to={`/admin/edit-user/${user.id}`} className={styles.button}>Edit</Button>
        </Card.Content>
        <Card.Content extra>
          <Icon name='calendar alternate outline' /> <div>Last Updated: {user.updatedAt}</div>
        </Card.Content>
      </Card>
    </div>
  )
}
