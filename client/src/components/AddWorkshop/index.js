import {connect} from 'react-redux'

import AddWorkshop from './AddWorkshop'
import {fetchCategories} from '../CategoryFilter/actions'

const mapStateToProps = (state) => {
  return {
    categories: state.categories.categories,
    ready: state.categories.ready
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCategories: () => dispatch(fetchCategories())
})

export default connect(mapStateToProps, mapDispatchToProps)(AddWorkshop)
