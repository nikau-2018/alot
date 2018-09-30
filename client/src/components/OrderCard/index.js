import React from 'react'
import {Card, Icon} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

import styles from './styles.css'

export default function Orders (props) {
  const order = props.order
  return (
    <div className='order-card'>
      <Card>
        <Card.Content>
          <Card.Header>
            <Icon name='dolly flatbed' /> Order #{order.id}<br />
          </Card.Header>
          <Card.Meta>
            <Link to={`/tools/${order.category}/${order.toolId}`}>
              {order.tool}<br/>
            </Link>
            Status: {order.status
            }</Card.Meta>
          <Card.Description>
            <Icon name='user' /> {order.firstName} {order.lastName}<br />
            <Icon name='mail' /><a href={`mailto:${order.email}`}> {order.email}</a><br />
            <Icon name='phone' /><a href={`tel:${order.phone}`}> {order.phone}</a><br /><br />
            <Icon name='pencil' /> {order.notes}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Icon name='calendar alternate outline' /> {order.createdAt}
        </Card.Content>
      </Card>
    </div>
  )
}
