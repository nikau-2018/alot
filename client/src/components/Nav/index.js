import React, {Component} from 'react'
import {Button} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

export default class Nav extends Component {
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
          <Link to="/register"><Button>Register</Button></Link>
          {this.state.login
            ? <Button>Log Out</Button> // these will dispatch actions
            : <Button>Log In</Button> // these will dispatch actions
          }
        </Button.Group>
      </div>
    )
  }
}
