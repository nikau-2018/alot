import React, {Component} from 'react'

// Components
// // import AdminNav from '../AdminNav'

export default class Admin extends Component {
  componentDidMount () {
    this.props.fetchOrders()
  }

  render () {
    console.log(this.props.orders)
    return (
      <div className='admin'>
        {/* <AdminNav /> */}
      </div>
    )
  }
}
