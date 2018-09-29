import React, {Component} from 'react'
import {Button} from 'semantic-ui-react'
import {Link, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import Logout from '../Auth/Logout'

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
          {
            this.props.isAuthenticated
              ? <Logout />
              : <Link to="/auth"><Button>Login</Button></Link>
          }
        </Button.Group>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated
  }
}

export default connect(mapStateToProps)(Nav)
