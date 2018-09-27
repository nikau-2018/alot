import React, {Component} from 'react'
import {Dropdown} from 'semantic-ui-react'

// import {fetchPosts} from '../../actions'

export default class CategoryFilter extends Component {
  constructor (props) {
    super(props)
    this.state = {}
}
  componentDidMount () {
    // this.props.dispatch(fetchPosts())
  }

  render () {
    return (
      <Dropdown className= 'categories' text='Categories'>
        <Dropdown.Menu>
          <Dropdown.Item text='Gardening' />
          <Dropdown.Item text='Cooking' />
        </Dropdown.Menu>
      </Dropdown>
    )
  }
}
