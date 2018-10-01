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
          <Link to="/">
            <Button className={styles.button}>
              <Icon name='home'/>Home
            </Button>
          </Link>
          <Link to="/tools">
            <Button className={styles.button}>
              <Icon name='wrench' />Tools
            </Button>
          </Link>
          <Link to="/workshops">
            <Button className={styles.button}>
              <Icon name='warehouse'/>Workshops
            </Button>
          </Link>
          {this.props.isAdmin &&
            <Link to="/admin">
              <Button className={styles.button}>Admin</Button>
            </Link>}
          {
            this.props.isAuthenticated
              ? <Logout className={styles.button} />
              : <Link to="/login">
                <Button className={styles.button}>
                  <Icon name='lock open'/>Login
                </Button>
              </Link>
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
