import React, { Component } from 'react'

import Welcome from '../Welcome'
import ToolsGallery from '../ToolsGallery'
import Footer from '../Footer'

export default class WelcomeContainer extends Component {
  render () {
    return (
      <div className='welcome-container' >
        <Welcome />
        <hr/>
        <p>tools gallery will go here</p>
        <hr/>
        <ToolsGallery />
        <Footer />
      </div>
    )
  }
}
