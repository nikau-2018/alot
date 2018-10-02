import React, {Component} from 'react'
import {Route} from 'react-router-dom'

// Components
import AdminNav from '../AdminNav'
import Orders from '../Orders'
import AddTool from '../AddTool'
import AddWorkshop from '../AddWorkshop'
import EditEmployee from '../EditEmployee'
import EmployeeForm from '../EmployeeForm'

// Not sure whether this needs to be stateful. Will leave as stateful for now.
export default class Admin extends Component {
  render () {
    const {path, url} = this.props.match
    return (
      <div>
        <AdminNav url={url}/>
        <Route path={`${path}/add-tool`} component={AddTool} />
        <Route path={`${path}/add-workshop`} component={AddWorkshop} />
        <Route exact path={`${path}/edit-employee`} component={EditEmployee} />
        <Route path={`${path}/edit-employee/:id`} component={EmployeeForm} />
        <Route path={`${path}/orders`} component={Orders} />
      </div>
    )
  }
}
