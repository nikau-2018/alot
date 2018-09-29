import React from 'react'
import {connect} from 'react-redux'
import {Button} from 'semantic-ui-react'
import Login from './Login'
import Register from './Register'

class Auth extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      action: 'login'
    }
  }

  setAction = (action) => {
    console.log(action)
    this.setState({action})
  }

  render () {
    const {action} = this.state
    return (
      <div>
        {
          this.props.isAuthenticated
            ? !this.props.inline && this.props.history.goBack()
            : action === 'login'
              ? <Login callback={this.setAction}/>
              : action === 'register' && <Register callback={this.setAction}/>
        }
        {
          !this.props.inline && <Button onClick={() => this.props.history.goBack()}>Back</Button>
        }
                
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated
  }
}

export default connect(mapStateToProps)(Auth)
