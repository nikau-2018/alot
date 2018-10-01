import React, {Component} from 'react'

// Components
import AdminNav from '../AdminNav'
import Orders from '../Orders'
import AddTool from '../AddTool'
import AddWorkshop from '../AddWorkshop'
import AddEmployee from '../AddEmployee'

import styles from './styles.css'

// Not sure whether this needs to be stateful. Will leave as stateful for now.
export default class Admin extends Component {
  render () {
    const {path} = this.props.match
    return (
      <div className='admin'>
        <AdminNav navigate={this.navigate}/>
        <Route path={`${path}/add-tool`} component={AddTool} />
        <Route path={`${path}/add-workshop`} component={AddWorkshop} />
        <Route path={`${path}/add-employee`} component={AddEmployee} />
        <Route path={`${path}/add`} component={AddTool} />
        <Orders />
        {/* <AddTool /> */}
        {/* <AddWorkshop /> */}
        {/* <AddEmployee /> */}
      </div>
    )
  }
}
