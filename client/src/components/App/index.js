import React, {Component} from 'react'
import {Route} from 'react-router-dom'

import './styles.css'
import Nav from '../Nav'
import CategoryFilter from '../CategoryFilter'

export default class App extends Component {
  render () {
    return (
      <div className="App">
        <Nav />
        <CategoryFilter />
        Yup. It&lsquo;s an app.
      </div>
    )
  }
}
