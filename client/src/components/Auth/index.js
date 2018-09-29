import React from 'react'
import {connect} from 'react-redux'
import Login from './Login'
// import Logout from './Logout'
import Register from './Register'

class Auth extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      action: 'login'
    }
  }

  setAction = (action) => {
    console.log(action)
    this.setState({action})
  }

  render () {
    const {action} = this.state
    return (
      <div>
        {
          this.props.isAuthenticated
            ? <p>logged in</p>
            : action === 'login'
              ? <Login callback={this.setAction}/>
              : action === 'register' && <Register callback={this.setAction}/>
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated
  }
}

export default connect(mapStateToProps)(Auth)
