import React, {Component} from 'react'
import { List, Card } from 'semantic-ui-react'

// Components
// // import AdminNav from '../AdminNav'

export default class Admin extends Component {
  componentDidMount () {
    this.props.fetchOrders()
  }

  render () {
    const test = this.props.orders && this.props.orders.map(order =>
      <Card key={order.id}>
        <Card.Content>
          <List>
            <List.Item>
              <List.Icon name='dolly flatbed'/>
              <List.Content>Order: {order.id}</List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name='user'/>
              <List.Content>User: {order.userId}</List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name='cog'/>
              <List.Content>Tool: {order.toolId}</List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name='pencil'/>
              <List.Content>Notes: {order.notes}</List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name='clipboard'/>
              <List.Content>Status: {order.status}</List.Content>
            </List.Item>
          </List>
        </Card.Content>
      </Card>
    )
    return (
      <div className='admin'>
        {/* <AdminNav /> */}
        <Card.Group>
          {test}
        </Card.Group>
      </div>
    )
  }
}
