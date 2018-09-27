import React, {Component} from 'react'
import {Route} from 'react-router-dom'

import './styles.css'

// components for testing, remove later
import Nav from '../Nav'
import ToolCard from '../ToolCard'

export default class App extends Component {
  render () {
    return (
      <div className="App">
        <Nav />
        Yup. It&lsquo;s an app.
        <ToolCard />
      </div>
    )
  }
}
