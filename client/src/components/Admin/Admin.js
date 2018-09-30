import React, {Component} from 'react'
import { Card, Icon } from 'semantic-ui-react'

// Components
// // import AdminNav from '../AdminNav'

export default class Admin extends Component {
  componentDidMount () {
    this.props.fetchOrders()
  }

  render () {
    const orderCards = this.props.orders && this.props.orders.map(order =>
      <Card key={order.id}>
        <Card.Content>
          <Card.Header><Icon name='dolly flatbed' /> Order #{order.id}</Card.Header>
          <Card.Meta>Status: {order.status}</Card.Meta>
          <Card.Description>
            <Icon name='user' /> {order.userId}<br />
            <Icon name='cog' /> {order.toolId}<br /><br />
            <Icon name='pencil' /> {order.notes}
          </Card.Description>
        </Card.Content>
      </Card>
    )
    return (
      <div className='admin'>
        {/* <AdminNav /> */}
        <Card.Group>
          {orderCards}
        </Card.Group>
      </div>
    )
  }
}
