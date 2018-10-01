import {connect} from 'react-redux'

import {fetchCategories} from './actions'

import CategoryFilter from './CategoryFilter'

import styles from './styles.css'

const mapStateToProps = (state, ownProps) => {
  const {categories} = state.categories
  let categoryName = 'Categories'
  const category = categories.find(cat => cat.id == ownProps.category)
  if (category) {
    categoryName = category.name
  }

  return {
    categories,
    categoryName
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCategories: () => dispatch(fetchCategories())
})

export default connect(mapStateToProps, mapDispatchToProps)(CategoryFilter)
