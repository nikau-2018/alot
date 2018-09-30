import React, {Component} from 'react'

// Components
// import AdminNav from '../AdminNav'
import Orders from '../Orders'
// import AddTool from '../AddTool'
// import AddWorkshop from '../AddWorkshop'
// import AddEmployee from '../AddEmployee'

// Not sure whether this needs to be stateful. Will leave as stateful for now.
export default class Admin extends Component {
  render () {
    return (
      <div className='admin'>
        {/* <AdminNav /> */}
        {/* Make below children conditionally render based on what's clicked in AdminNav */}
        <Orders />
        {/* <AddTool /> */}
        {/* <AddWorkshop /> */}
        {/* <AddEmployee /> */}
      </div>
    )
  }
}
