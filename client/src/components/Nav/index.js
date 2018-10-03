import React, {Component} from 'react'
import {Button, Icon, Menu} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import Logout from '../Auth/Logout'

import styles from './styles.css'

class Nav extends Component {
  constructor (props) {
    super(props)
    this.state = {
      login: true
    }
  }

  render () {
    return (
      <div className={styles.nav}>
        <div className={styles.menuLeft}>
          <div className={styles.icon} as={Link} to="/">
            <Icon name='home'/>Home
          </div>

          <div className={styles.icon} as={Link} to="/tools">
            <Icon name='wrench' />Tools
          </div>

          <div className={styles.icon} as={Link} to="/workshops">
            <Icon name='warehouse'/>Workshops
          </div>
        </div>

        <div className={styles.menuRight} position='right'>
          {this.props.isAdmin &&
            <div className={styles.icon} as={Link} to="/admin">
              <Icon name='book'/>Admin
            </div>
          }
          {this.props.isAuthenticated
            ? <Logout />
            : <div className={styles.icon} as={Link} to="/login">
                <Icon name='lock open'/>Login
              </div>
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    isAdmin: state.auth.isAdmin
  }
}

export default connect(mapStateToProps)(Nav)
