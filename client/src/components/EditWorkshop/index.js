import {connect} from 'react-redux'

import EditWorkshop from './EditWorkshop'
import {fetchCategories} from '../CategoryFilter/actions'
import {fetchWorkshops} from '../WorkshopsContainer/actions'

const mapStateToProps = (state) => {
  return {
    workshops: state.workshops.workshops,
    categories: state.categories.categories,
    ready: state.workshops.ready && state.categories.ready
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCategories: () => dispatch(fetchCategories()),
  fetchWorkshops: () => dispatch(fetchWorkshops())
})

export default connect(mapStateToProps, mapDispatchToProps)(EditWorkshop)
