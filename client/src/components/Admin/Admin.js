import React, {Component} from 'react'

// Components
// // import AdminNav from '../AdminNav'

export default class Admin extends Component {
  componentDidMount () {
    this.props.fetchOrders()
  }

  render () {
    console.log(this.props.orders)
    const test = this.props.orders && this.props.orders.map(order => {
      return <p>{order.id}</p>
    })
    return (
      <div className='admin'>
        {/* <AdminNav /> */}
        {test}
      </div>
    )
  }
}
