import React, {Component} from 'react'
import {Route} from 'react-router-dom'

import './styles.css'

// components for testing, remove later
import Nav from '../Nav'
import CategoryFilter from '../CategoryFilter'
import ToolCard from '../ToolCard'

export default class App extends Component {
  
  render () {
    return (
      <div className="App">
        <Nav />
        <CategoryFilter />
        Yup. It&lsquo;s an app.
        <ToolCard />
      </div>
    )
  }
}
