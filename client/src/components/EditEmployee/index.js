import {connect} from 'react-redux'

import {fetchEmployees} from './actions'
import CategoryFilter from '../CategoryFilter';

import EditEmployee from './EditEmployee'

const mapStateToProps = () => {

}

const mapDispatchToProps =() => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(EditEmployee)
