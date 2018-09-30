import React, {Component} from 'react'
import {Button} from 'semantic-ui-react'
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
      <div className='ui-grid'>
        <Button.Group vertical>
          <Link to="/"><Button>Home</Button></Link>
          <Link to="/tools"><Button>Tools</Button></Link>
          <Link to="/workshops"><Button>Workshops</Button></Link>
          {this.props.isAdmin && <Link to="/admin"><Button>Admin</Button></Link>}
          {
            this.props.isAuthenticated
              ? <Logout />
              : <Link to="/login"><Button>Login</Button></Link>
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
