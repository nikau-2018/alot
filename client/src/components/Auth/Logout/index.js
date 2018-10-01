import React from 'react'
import {connect} from 'react-redux'
import {Button} from 'semantic-ui-react'

import {logoutUser} from './actions'

import styles from './styles.css'

const Logout = (props) => {
  return (
    <div className={styles.logout}>
      <Button className={styles.button} onClick={props.logoutUser}>
        Logout
      </Button>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    logoutUser: () => {
      dispatch(logoutUser())
    }
  }
}

export default connect(null, mapDispatchToProps)(Logout)
