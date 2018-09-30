import {connect} from 'react-redux'

import AddTool from './AddTool'
import {addTool} from './actions'
import {fetchCategories} from '../CategoryFilter/actions'

const mapStateToProps = (state) => {
  return {
    categories: state.categories.categories
  }
}

const mapDispatchToProps = (dispatch) => ({
  addTool: () => dispatch(addTool()),
  fetchCategories: () => dispatch(fetchCategories())
})

export default connect(mapStateToProps, mapDispatchToProps)(AddTool)
