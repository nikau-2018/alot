import {connect} from 'react-redux'

import {fetchCategories} from '../CategoryFilter/actions'

import ToolDetail from './ToolDetail'

import styles from './styles.css'

const mapStateToProps = (state) => {
  return {
    categories: state.categories
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCategories: () => dispatch(fetchCategories())
})

export default connect(mapStateToProps, mapDispatchToProps)(ToolDetail)
