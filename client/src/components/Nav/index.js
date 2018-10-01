import React, {Component} from 'react'
import {Button, Icon} from 'semantic-ui-react'
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
        <Button.Group vertical>
          <Button as={Link} to="/" className={styles.button}>
            <Icon name='home'/>Home
          </Button>
          <Button as={Link} to="/tools" className={styles.button}>
            <Icon name='wrench' />Tools
          </Button>
          <Button as={Link} to="/workshops" className={styles.button}>
            <Icon name='warehouse'/>Workshops
          </Button>
          {this.props.isAdmin &&
            <Button as={Link} to="/admin" className={styles.button}>
              Admin
            </Button>
          }
          {this.props.isAuthenticated
            ? <Logout />
            : <Button as={Link} to="/login" className={styles.button}>
              <Icon name='lock open'/>Login
            </Button>
          }
        </Button.Group>
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
