import {connect} from 'react-redux'

import {fetchUsers} from '../EditEmployee/actions'

import EmployeeForm from './EmployeeForm'

const mapStateToProps = (state) => {
  return {
    employees: state.employees.users,
    ready: state.employees.ready
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchUsers: () => dispatch(fetchUsers())
})

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeForm)