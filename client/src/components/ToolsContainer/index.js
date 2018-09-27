import {connect} from 'react-redux'

import {fetchTools} from './actions'

import ToolsContainer from './ToolsContainer'

const mapStateToProps = (state) => {
  return {
    tools: state.allTools.tools
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchTools: () => dispatch(fetchTools())
})

export default connect(mapStateToProps, mapDispatchToProps)(ToolsContainer)
