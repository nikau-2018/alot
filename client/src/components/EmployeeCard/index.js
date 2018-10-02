import React from 'react'
import {Card, Icon} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

import styles from './styles.css'

export default function EmployeeCard (props) {
  const employee = props.employee
  return (
    <div>
      <Card as={Link} to='/edit/employee' className={styles.employeeCard}>
        <Card.Content>
          <Card.Header>
            {employee.firstName}<br />
          </Card.Header>
          <Card.Description>
            <Icon name='user' /> {employee.firstName} {employee.lastName}<br />
            <Icon name='mail' /><a href={`mailto:${employee.email}`}> {employee.email}</a><br />
            <Icon name='phone' /><a href={`tel:${employee.phone}`}> {employee.phone}</a><br /><br />
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Icon name='calendar alternate outline' /> <div>last updated on: {employee.updatedAt}</div>
        </Card.Content>
      </Card>
    </div>
  )
}
