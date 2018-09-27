import React, { Component } from 'react'

import Welcome from '../Welcome'
import ToolsGallery from '../ToolsGallery'
import Footer from '../Footer'

export default class WelcomeContainer extends Component {
  render () {
    return (
      <div className='welcome-container' >
        <Welcome />
        <ToolsGallery />
        <Footer />
      </div>
    )
  }
}
