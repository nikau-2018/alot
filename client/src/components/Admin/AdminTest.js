import React from 'react'
import axios from 'axios'

export default class AdminTest extends React.Component {
  render () {
    let result = ''
    axios
      .get('/api/v1/users/protectedadmin')
      .then(res => {
        console.log(res.data)
      })
      .catch(err => {
        console.log(err.message)
      })
    return (
      <div className='admin-test'>
        {result && result}
      </div>
    )
  }
}
