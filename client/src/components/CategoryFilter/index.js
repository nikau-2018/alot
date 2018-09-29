import {connect} from 'react-redux'

import {fetchCategories} from './actions'

import CategoryFilter from './CategoryFilter'

import styles from './styles.css'

const mapStateToProps = (state) => {
  return {
    categories: state.categories
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCategories: () => dispatch(fetchCategories())
})

export default connect(mapStateToProps, mapDispatchToProps)(CategoryFilter)
