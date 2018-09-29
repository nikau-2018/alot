import {connect} from 'react-redux'

import {fetchCategories} from '../CategoryFilter/actions'

import ToolDetail from './ToolDetail'

const mapStateToProps = (state) => {
  return {
    categories: state.categories
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCategories: () => dispatch(fetchCategories())
})

export default connect(mapStateToProps, mapDispatchToProps)(ToolDetail)
