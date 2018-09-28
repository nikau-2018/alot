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

export default class App extends Component {
  render () {
    return (
      <div className="ui grid">
        <Nav className='right floated sixteen wide column'/>
        <Route exact path='/' component={WelcomeContainer}/>
        <Route exact path='/tools' component={ToolsContainer}/>
        {/* <Route path='/tools/:id' component={ToolDetailContainer}/> */}
        {/* <Route exact path='/workshops' component={WorkshopsContainer} /> */}
        {/* <Route path='/workshops/:id' component={WorkshopDetailContainer} /> */}
      </div>
    )
  }
}
