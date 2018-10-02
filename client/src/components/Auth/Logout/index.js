import React from 'react'
import {connect} from 'react-redux'
import {Button, Menu, Icon} from 'semantic-ui-react'

import {logoutUser} from './actions'

import styles from './styles.css'

const Logout = (props) => {
  return (
    // This needs both logout and button classes to work for the css modules
    <Menu.Item className={styles.icon} onClick={props.logoutUser}>
      <Icon name='log out'/>Logout
    </Menu.Item>
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
