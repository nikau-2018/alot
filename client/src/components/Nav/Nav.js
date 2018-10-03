import React, {Component} from 'react'
import {Button, Icon} from 'semantic-ui-react'
import {Link} from 'react-router-dom'


import styles from './styles.css'

export default class Nav extends Component {
  constructor (props) {
    super(props)
    this.state = {
      login: true
    }
  }

  render () {
    let inputs = document.getElementById('toggle')
    console.log(inputs)
    let toggle = () => {
    }
    return (
      <nav role='navigation'>
        <div id={styles.menuToggle}>
        <input type='checkbox' id={styles.toggle}/>
        <span></span>
        <span></span>
        <span></span>
        <ul id={styles.menu}>
          <Link to='/'><li><Icon name='home'/>Home</li></Link>
          <Link to='/tools'><li><Icon name='wrench' />Tools</li></Link>
          <Link to='/workshops'><li><Icon name='warehouse'/>Workshops</li></Link>
          {this.props.isAdmin &&
          <Link to='/admin'><li><Icon name='book'/>Admin</li></Link>
          }
          {this.props.isAuthenticated
            ? <Link to='#' onClick={this.props.logoutUser}><li>Logout</li></Link>
            : <Link to='/login'><li>Login</li></Link>
          }
        </ul>
        </div>
      </nav>
    )
  }
}

// old menu attempt
{/* <div className={styles.menuLeft}>
  <Button  as={Link} to="/" className={styles.button}>
      <Icon name='home'/>Home
  </Button>
  <Button  as={Link} to="/tools" className={styles.button}>
    <Icon name='wrench' />Tools
  </Button>
  <Button  as={Link} to="/workshops" className={styles.button}>
    <Icon name='warehouse'/>Workshops
  </Button>
</div>

<div className={styles.menuRight} position='right'>
  {this.props.isAdmin &&
    <Button as={Link} to="/admin" className={styles.button}>
      <Icon name='book'/>Admin
    </Button>
  }
  {this.props.isAuthenticated
    ? <Button as={Link} to='#' className={styles.button} onClick={this.props.logoutUser}>
        <Icon name='log out'/>Logout
      </Button>
    : <Button as={Link} to='/login' className={styles.button}>
        <Icon name='lock open'/>Login
      </Button>
  }
</div> */}