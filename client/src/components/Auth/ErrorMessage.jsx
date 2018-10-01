import React from 'react'
import {connect} from 'react-redux'

const ErrorMessage = (props) => {
  return (
    <p className="error">{props.message}</p>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    message: state[ownProps.reducer].errorMessage
  }
}

export default connect(mapStateToProps)(ErrorMessage)
