import React, { Component } from 'react'

import './styles.css'
import ToolCard from '../ToolCard'

export default class App extends Component {
  render () {
    return (
      <div className="main">
        Yup. It&lsquo;s an app.
        <ToolCard />
      </div>
    )
  }
}
