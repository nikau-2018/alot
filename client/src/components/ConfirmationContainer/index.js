import {connect} from 'react-redux'

import ConfirmationContainer from './ConfirmationContainer'

import styles from './styles.css'

const mapStateToProps = (state) => {
  return {
    tools: state.tools.tools,
    // needs to be filled with workshops once this has been added to redux store
    isAuthenticated: state.auth.isAuthenticated,
    isAdmin: state.auth.isAdmin
  }
}

export default connect(mapStateToProps)(ConfirmationContainer)
