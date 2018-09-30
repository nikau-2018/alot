import React, {Component} from 'react'
import { List, Card, Icon } from 'semantic-ui-react'

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
          {test}
        </Card.Group>
      </div>
    )
  }
}

// Putting this here if we want to change from Cards back to List
// <List>
//   <List.Item>
//     <List.Icon name='dolly flatbed'/>
//     <List.Content>Order: {order.id}</List.Content>
//   </List.Item>
//   <List.Item>
//     <List.Icon name='user'/>
//     <List.Content>User: {order.userId}</List.Content>
//   </List.Item>
//   <List.Item>
//     <List.Icon name='cog'/>
//     <List.Content>Tool: {order.toolId}</List.Content>
//   </List.Item>
//   <List.Item>
//     <List.Icon name='pencil'/>
//     <List.Content>Notes: {order.notes}</List.Content>
//   </List.Item>
//   <List.Item>
//     <List.Icon name='clipboard'/>
//     <List.Content>Status: {order.status}</List.Content>
//   </List.Item>
// </List>
