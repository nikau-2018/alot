import React from 'react'
import {connect} from 'react-redux'
import Login from './Login'
import Register from './Register'

const Auth = ({isAuthenticated}) => {
  return (
    <div>{isAuthenticated ? <p>Logged In</p> : <Register />}</div>
  )
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated
  }
}

export default connect(mapStateToProps)(Auth)
