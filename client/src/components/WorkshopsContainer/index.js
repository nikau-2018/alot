import {connect} from 'react-redux'

import {fetchWorkshops} from './actions'
import {fetchCategories} from '../CategoryFilter/actions'

import WorkshopsContainer from './WorkshopsContainer'

const mapStateToProps = (state) => {
  if (state.workshops.workshops.length > 0) {
    return {
      workshops: state.workshops.workshops,
      ready: true,
      categories: state.categories
    }
  } else {
    return {ready: false}
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchWorkshops: () => dispatch(fetchWorkshops()),
  fetchCategories: () => dispatch(fetchCategories())
})

export default connect(mapStateToProps, mapDispatchToProps)(WorkshopsContainer)
