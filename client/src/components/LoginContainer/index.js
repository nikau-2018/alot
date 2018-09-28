import {connect} from 'react-redux'

import {loginUser} from './actions'

import LoginContainer from './LoginContainer'

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: creds => {
      return dispatch(loginUser(creds))
    }
  }
}

export default connect(null, mapDispatchToProps)(LoginContainer)
