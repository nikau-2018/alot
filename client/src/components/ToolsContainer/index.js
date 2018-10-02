import {connect} from 'react-redux'

import {fetchTools} from './actions'

import ToolsContainer from './ToolsContainer'

const mapStateToProps = (state) => {
  return {
    tools: state.tools.tools,
    search: state.search
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchTools: () => dispatch(fetchTools())
})

export default connect(mapStateToProps, mapDispatchToProps)(ToolsContainer)
