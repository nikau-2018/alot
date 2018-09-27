import {connect} from 'react-redux'

import ToolsContainer from './ToolsContainer'

const mapStateToProps = (state) => {
  return {
    tools: state.tools
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchTools: () => dispatch(fetchTools())
})

export default connect(mapStateToProps)(ToolsContainer)
