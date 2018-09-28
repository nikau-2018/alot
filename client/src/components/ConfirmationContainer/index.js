import {connect} from 'react-redux'

import ConfirmationContainer from './ConfirmationContainer'

const mapStateToProps = (state) => {
  return {
    tools: state.tools.tools
  }
}

export default connect(mapStateToProps)(ConfirmationContainer)
