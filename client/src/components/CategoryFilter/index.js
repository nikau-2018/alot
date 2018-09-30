import {connect} from 'react-redux'

import {fetchCategories} from './actions'

import CategoryFilter from './CategoryFilter'

const mapStateToProps = (state) => {
  return {
    categories: state.categories.categories
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCategories: () => dispatch(fetchCategories())
})

export default connect(mapStateToProps, mapDispatchToProps)(CategoryFilter)
