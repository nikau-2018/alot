import React, {Component} from 'react'
import {Card} from 'semantic-ui-react'

import OrderCard from '../OrderCard'

export default class Orders extends Component {
  componentDidMount () {
    this.props.fetchOrders()
  }

  render () {
    const orders = this.props.orders
    return (
      <div className='orders'>
        <h2>Orders</h2>
        <Card.Group>
          {orders && orders.map(order =>
            <OrderCard key={order.id} order={order}/>
          )}
        </Card.Group>
      </div>
    )
  }
}
