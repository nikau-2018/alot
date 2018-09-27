import React, { Component } from 'react'

import logo from '/alot-logo.png'

export default class Footer extends Component {
  render () {
    return (
      <div>
        <img className='logo' src= {logo}/>
        <div>
          <h1>Welcome!</h1>
        </div>
        <div>
          <p>The Auckland Library of tools provides mambers with access to high quality and well maintained tools and equipment.</p>
        </div>
      </div>
    )
  }
}
