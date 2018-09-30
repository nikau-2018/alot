import React, {Component} from 'react'

// Components
// import AdminNav from '../AdminNav'
import Orders from '../Orders'

export default class Admin extends Component {
  render () {
    return (
      <div className='admin'>
        {/* <AdminNav /> */}
        <Orders />
      </div>
    )
  }
}
