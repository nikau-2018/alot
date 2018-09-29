import React, { Component } from 'react'

import Welcome from '../Welcome'
import ToolsGallery from '../ToolsGallery'

import styles from './styles.css'

export default class WelcomeContainer extends Component {
  render () {
    return (
      <div className='welcome-container' >
        <Welcome />
        <hr/>
        <ToolsGallery />
      </div>
    )
  }
}
