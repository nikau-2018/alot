import {connect} from 'react-redux'

import {fetchUsers} from './actions'

import EditEmployee from './EditEmployee'

const mapStateToProps = (state) => {
  return {
    employees: state.employees.users,
    ready: state.employees.ready
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchUsers: () => dispatch(fetchUsers())
})

export default connect(mapStateToProps, mapDispatchToProps)(EditEmployee)
