import {connect} from 'react-redux'

import {fetchWorkshops} from './actions'
import {fetchCategories} from '../CategoryFilter/actions'

import WorkshopsContainer from './WorkshopsContainer'

const mapStateToProps = (state) => {
  const allCategories = state.categories.map((category) => category.id)
  return {
    workshops: state.workshops.workshops,
    displayedCategory: allCategories
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchWorkshops: () => dispatch(fetchWorkshops()),
  fetchCategories: () => dispatch(fetchCategories())
})

export default connect(mapStateToProps, mapDispatchToProps)(WorkshopsContainer)
