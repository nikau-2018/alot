import React, {Component} from 'react'
import {Route} from 'react-router-dom'

import './styles.css'

// components for testing, remove later
import Nav from '../Nav'
import WelcomeContainer from '../WelcomeContainer'
import ToolsContainer from '../ToolsContainer'
/* import ToolDetailContainer from '../ToolDetailContainer'
import WorkshopsContainer from '../WorkshopsContainer'
import WorkshopDetailContainer from '../WorkshopDetailContainer' */
import LoginContainer from '../LoginContainer'
import Register from '../Register'

export default class App extends Component {
  render () {
    return (
      <div>
        <Nav />
        <Route exact path='/' component={WelcomeContainer}/>
        <Route exact path='/tools' component={ToolsContainer}/>
        <Route path='/Login' component={LoginContainer}/>
        <Route path='/Register' component={Register}/>
        {/* <Route path='/tools/:id' component={ToolDetailContainer}/> */}
        {/* <Route exact path='/workshops' component={WorkshopsContainer} /> */}
        {/* <Route path='/workshops/:id' component={WorkshopDetailContainer} /> */}
      </div>
    )
  }
}
