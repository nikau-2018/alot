import React, {Component} from 'react'

// Components
// import AdminNav from '../AdminNav'
import Orders from '../Orders'

// Not sure whether this needs to be stateful. Will leave as stateful for now.
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
