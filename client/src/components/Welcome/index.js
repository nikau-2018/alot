import React from 'react'

import logo from './alot-logo.png'

import styles from './styles.css'

export default function Welcome () {
  return (
    <div className='welcome'>
      <img className='logo' src={logo} />
      <div>
        <h1>Welcome!</h1>
      </div>
      <div>
        <p>The Auckland Library of tools provides members with access to high quality and well maintained tools and equipment.</p>
      </div>
    </div>
  )
}
