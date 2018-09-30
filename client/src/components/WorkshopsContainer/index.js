import {connect} from 'react-redux'

import {fetchWorkshops} from './actions'
import {fetchCategories} from '../CategoryFilter/actions'

import WorkshopsContainer from './WorkshopsContainer'

const mapStateToProps = (state) => {
  // if (state.workshops.workshops.length > 0 && state.categories.categories.length > 0) {
  //   return {
  //     workshops: state.workshops.workshops,
  //     ready: true,
  //     categories: state.categories.categories
  //   }
  // } else {
  //   return {ready: false}
  return {
    workshops: state.workshops.workshops,
    ready: state.workshops.workshops.length > 0 && state.categories.categories.length > 0,
    categories: state.categories.categories
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchWorkshops: () => dispatch(fetchWorkshops()),
  fetchCategories: () => dispatch(fetchCategories())
})

export default connect(mapStateToProps, mapDispatchToProps)(WorkshopsContainer)
