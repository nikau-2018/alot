import React, {Component} from 'react'
import {Dropdown} from 'semantic-ui-react'

export default class CategoryFilter extends Component {
  componentDidMount () {

  }

  render () {
    return (
      <Dropdown text='Categories'>
        <Dropdown.Menu>
          <Dropdown.Item text='Gardening' />
          <Dropdown.Item text='Cooking' />
        </Dropdown.Menu>
      </Dropdown>
    )
  }
}
