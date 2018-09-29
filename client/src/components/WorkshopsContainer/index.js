import {connect} from 'react-redux'

import {fetchWorkshops} from './actions'
import {fetchCategories} from '../CategoryFilter/actions'

import WorkshopsContainer from './WorkshopsContainer'

const mapStateToProps = (state) => {
  return {
    workshops: state.workshops.workshops,
    categories: state.categories
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchWorkshops: () => dispatch(fetchWorkshops()),
  fetchCategories: () => dispatch(fetchCategories())
})

export default connect(mapStateToProps, mapDispatchToProps)(WorkshopsContainer)
