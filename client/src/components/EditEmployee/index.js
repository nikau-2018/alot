import {connect} from 'react-redux'

import {fetchUsers} from './actions'
import CategoryFilter from '../CategoryFilter';

import EditEmployee from './EditEmployee'

const mapStateToProps = () => {
  

}

const mapDispatchToProps = (dispatch) => ({
  fetchUsers: () => dispatch(fetchUsers())
})

export default connect(mapStateToProps, mapDispatchToProps)(EditEmployee)
