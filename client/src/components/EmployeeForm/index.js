import {connect} from 'react-redux'

import {fetchUsers} from '../EditEmployee/actions'

import EmployeeForm from './EmployeeForm'

const mapStateToProps = (state) => {
  return {
    users: state.users.users,
    ready: state.users.ready
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchUsers: () => dispatch(fetchUsers())
})

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeForm)