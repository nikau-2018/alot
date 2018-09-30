import React, {Component} from 'react'
import {Card, Icon} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

export default class Admin extends Component {
  componentDidMount () {
    this.props.fetchOrders()
  }

  render () {
    const orderCards = this.props.orders && this.props.orders.map(order =>
      <Card key={order.id}>
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
    )
    return (
      <div className='orders'>
        <h2>Orders</h2>
        <Card.Group>
          {orderCards}
        </Card.Group>
      </div>
    )
  }
}
