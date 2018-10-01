import React, {Component} from 'react'
import {Route} from 'react-router-dom'
import {Divider} from 'semantic-ui-react'

import './styles.css'

// components for testing, remove later
import Nav from '../Nav'
import WelcomeContainer from '../WelcomeContainer'
import ToolsContainer from '../ToolsContainer'
import ToolDetailContainer from '../ToolDetailContainer'
import WorkshopsContainer from '../WorkshopsContainer'
import WorkshopDetailContainer from '../WorkshopDetailContainer'
import Auth from '../Auth'
import ConfirmationContainer from '../ConfirmationContainer'
import Admin from '../Admin'
import Footer from '../Footer'
import AdminTest from '../Admin/AdminTest'

export default class App extends Component {
  render () {
    return (
      <div>
        <Nav />
        <Route exact path='/' component={WelcomeContainer}/>
        <Route path='/login' component={Auth}/>
        <Route exact path='/admin' component={Admin}/>
        <Route exact path='/tools/:category?' component={ToolsContainer}/>
        <Route exact path='/tools/:category/:id' component={ToolDetailContainer}/>
        <Route exact path='/workshops/:category?' component={WorkshopsContainer} />
        <Route exact path='/workshops/:category/:id' component={WorkshopDetailContainer} />
        <Route exact path='/confirm/:type/:id' component={ConfirmationContainer}/>
        {/* For testing non connected components */}
        <Route exact path='/protectedtest' component={AdminTest}/>
        <Divider />
        <Route path='/' component={Footer}/>
      </div>
    )
  }
}
