import {connect} from 'react-redux'

import ConfirmationContainer from './ConfirmationContainer'

const mapStateToProps = (state) => {
  return {
    tools: state.tools.tools
    // needs to be filled with workshops once this has been added to redux store
  }
}

export default connect(mapStateToProps)(ConfirmationContainer)
