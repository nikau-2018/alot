import React, {Component} from 'react'
import {Container} from 'semantic-ui-react'

export default class Confirmation extends Component {
  
  render () {
    return (
      <Container>
        <div className='confirmation'>
          <p>Are you sure you would like to rent ?</p>
          
        </div>
      </Container>
    )
  }
}