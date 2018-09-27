import {connect} from 'react-redux'

import ToolsContainer from './ToolsContainer'

const mapStateToProps = (state) => {
  return {
    tools: state.tools
  }
}

export default connect(mapStateToProps)(ToolsContainer)
