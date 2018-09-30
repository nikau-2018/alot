import React, {Component} from 'react'
import { List } from 'semantic-ui-react'

// Components
// // import AdminNav from '../AdminNav'

export default class Admin extends Component {
  componentDidMount () {
    this.props.fetchOrders()
  }

  render () {
    const test = this.props.orders && this.props.orders.map(order =>
      <List key={order.id}>
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
          <List.Icon name='clipboard list'/>
          <List.Content>Notes: {order.notes}</List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name='chevron right'/>
          <List.Content>Status: {order.status}</List.Content>
        </List.Item>
      </List>
    )
    return (
      <div className='admin'>
        {/* <AdminNav /> */}
        {test}
      </div>
    )
  }
}
