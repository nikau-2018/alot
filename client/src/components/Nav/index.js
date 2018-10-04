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
        <Menu icon='labeled' small className={styles.menu}>
          <Menu.Item className={styles.icon} as={Link} to="/">
            <Icon name='home'/><div className={styles.navText}>Home</div>
          </Menu.Item>

          <Menu.Item className={styles.icon} as={Link} to="/tools">
            <Icon name='wrench' /><div className={styles.navText}>Tools</div>
          </Menu.Item>

          <Menu.Item className={styles.icon} as={Link} to="/workshops">
            <Icon name='warehouse'/><div className={styles.navText}>Workshops</div>
          </Menu.Item>

          <Menu.Menu position='right'>
            {this.props.isAdmin &&
              <Menu.Item className={styles.icon} as={Link} to="/admin">
                <Icon name='book'/><div className={styles.navText}>Admin</div>
              </Menu.Item>
            }
            {this.props.isAuthenticated
              ? <Logout />
              : <Menu.Item className={styles.icon} as={Link} to="/login">
                <Icon name='lock open'/><div className={styles.navText}>Login</div>
              </Menu.Item>
            }
          </Menu.Menu>
        </Menu>
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
