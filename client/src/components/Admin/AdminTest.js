import React from 'react'
import axios from 'axios'

export default class AdminTest extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      admin: false,
      logged: false
    }
  }

  componentDidMount () {
    console.log('hi')
    axios
      .get('/api/v1/users/protectedadmin')
      .then(res => {
        this.setState({admin: true})
      })

    axios
      .get('/api/v1/users/protected')
      .then(res => {
        this.setState({logged: true})
      })
  }

  render () {
    return (
      <div className='admin-test'>
        {this.state.admin ? <p>Is admin</p> : <p>Not admin</p> }
        {this.state.logged ? <p>Is logged in</p> : <p>Not logged in</p> }

      </div>
    )
  }
}
