import {connect} from 'react-redux'

import {searchTool, searchWorkshop} from './actions'

import Search from './Search'

const mapStateToProps = (state) => {
  return {
    search: state.search
  }
}

const mapDispatchToProps = (dispatch) => ({
  searchStringTool: (e) => dispatch(searchTool(e.currentTarget.value)),
  searchStringWorkshop: (e) => dispatch(searchWorkshop(e.currentTarget.value))
})

export default connect(mapStateToProps, mapDispatchToProps)(Search)
