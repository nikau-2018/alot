import {connect} from 'react-redux'

import {fetchUsers} from './actions'
import CategoryFilter from '../CategoryFilter'

import EditEmployee from './EditEmployee'

const mapStateToProps = (state) => {
  const {users} = state.users
  const employees = ''

  return {
    users
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchUsers: () => dispatch(fetchUsers())
})

export default connect(mapStateToProps, mapDispatchToProps)(EditEmployee)
