import {connect} from 'react-redux'
import {loginUser} from './actions'
import LoginForm from './LoginForm'

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: creds => {
      return dispatch(loginUser(creds))
    }
  }
}

export default connect(null, mapDispatchToProps)(LoginForm)
