import {connect} from 'react-redux'

import {fetchWorkshops} from './actions'
import {fetchCategories} from '../CategoryFilter/actions'

import WorkshopsContainer from './WorkshopsContainer'

import styles from './styles.css'

const mapStateToProps = (state) => {
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
