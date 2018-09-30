import {connect} from 'react-redux'

import AddTool from './AddTool'
import {addTool} from './actions'
import {fetchCategories} from '../CategoryFilter/actions'

const mapStateToProps = (state) => {
  const categoryIds = state.categories.categories.map((category) => category.id)
  return {
    categoryIds: categoryIds
  }
}

const mapDispatchToProps = (dispatch) => ({
  addTool: () => dispatch(addTool()),
  fetchCategories: () => dispatch(fetchCategories())
})

export default connect(mapStateToProps, mapDispatchToProps)(AddTool)
