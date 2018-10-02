import {connect} from 'react-redux'

import {searchTool} from './actions'

import Search from './Search'

import styles from './styles.css'

const mapStateToProps = (state) => {
  return {
    search: state.search
  }
}

const mapDispatchToProps = (dispatch) => ({
  searchString: (e) => dispatch(searchTool(e.currentTarget.value))
})

export default connect(mapStateToProps, mapDispatchToProps)(Search)
