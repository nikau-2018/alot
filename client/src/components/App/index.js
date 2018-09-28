import React, {Component} from 'react'
import {Route} from 'react-router-dom'

import './styles.css'

// components for testing, remove later
import Nav from '../Nav'
// import WelcomeContainer from '../WelcomeContainer'
import ToolsContainer from '../ToolsContainer'
import Login from '../Login'
import Register from '../Register'
/* import ToolDetailContainer from '../ToolDetailContainer'
import WorkshopsContainer from '../WorkshopsContainer'
import ToolDetailContainer from '../ToolDetailContainer'
/* import WorkshopsContainer from '../WorkshopsContainer'
import WorkshopDetailContainer from '../WorkshopDetailContainer' */

export default class App extends Component {
  render () {
    return (
      <div className="app">

        <Route exact path='/' component={Nav}/>
        <Route path='/Login' component={Login}/>
        <Route path='/Register' component={Register}/>
        {/*   <Route exact path='/' component={WelcomeContainer}/>
        <Route exact path='/tools' component={ToolsContainer}/>
        <Route exact path='/workshops' component={WorkshopsContainer} />
        <Route exact path='/tools/:id' component={ToolDetailContainer}/>
        <Route path='/workshops/:id' component={WorkshopDetailContainer} /> */}
      </div>
    )
  }
}
