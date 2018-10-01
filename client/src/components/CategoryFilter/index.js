import {connect} from 'react-redux'

import {fetchCategories} from './actions'

import CategoryFilter from './CategoryFilter'

import styles from './styles.css'

const mapStateToProps = (state, ownProps) => {
  const {categories} = state.categories
  let categoryName = 'Categories'
  if (categories.length !== 0) {
    categoryName = categories.find(category => category.id === ownProps.category).name
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
