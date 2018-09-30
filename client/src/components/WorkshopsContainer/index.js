import {connect} from 'react-redux'

import {fetchWorkshops} from './actions'
import {fetchCategories} from '../CategoryFilter/actions'

import WorkshopsContainer from './WorkshopsContainer'

const mapStateToProps = (state) => {
  if (state.workshops.workshops.length > 0) {
    return {
      workshops: state.workshops.workshops,
      loading: state.workshops.pending,
      categories: state.categories
    }
  } else {
    return false
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchWorkshops: () => dispatch(fetchWorkshops()),
  fetchCategories: () => dispatch(fetchCategories())
})

export default connect(mapStateToProps, mapDispatchToProps)(WorkshopsContainer)
