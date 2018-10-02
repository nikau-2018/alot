import {connect} from 'react-redux'

import {fetchTools} from './actions'

import ToolsContainer from './ToolsContainer'

const mapStateToProps = (state) => {
  return {
    tools: state.tools.tools,
    searchTool: state.searchTool,
    ready: state.tools.ready
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchTools: () => dispatch(fetchTools())
})

export default connect(mapStateToProps, mapDispatchToProps)(ToolsContainer)
