import React, {Component} from 'react'
import {Route} from 'react-router-dom'

import './styles.css'

// components for testing, remove later
import Nav from '../Nav'
// import WelcomeContainer from '../WelcomeContainer'
// import ToolsContainer from '../ToolsContainer'
/* import ToolDetailContainer from '../ToolDetailContainer'
import WorkshopsContainer from '../WorkshopsContainer'
import WorkshopDetailContainer from '../WorkshopDetailContainer' */
import Confirmation from '../Confirmation'

export default class App extends Component {
  render () {
    return (
      <div className="app">
        <Nav />
        {/* <ToolsContainer /> */}
        {/* <Route exact path='/' component={WelcomeContainer}/> */}
        {/*   <Route exact path='/' component={WelcomeContainer}/>
        <Route exact path='/tools' component={ToolsContainer}/>
        <Route path='/tools/:id' component={ToolDetailContainer}/>
        <Route exact path='/workshops' component={WorkshopsContainer} />
        <Route path='/workshops/:id' component={WorkshopDetailContainer} /> */}
        <Route exact path='/confirmation' component={Confirmation} />
      </div>
    )
  }
}
