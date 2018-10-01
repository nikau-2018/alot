import React, {Component} from 'react'
import {Input, Button} from 'semantic-ui-react'

export default class Search extends Component {
  render () {
    return (
      <div>
        <Input placeholder='Search...' /> &nbsp;
        <Button>Search</Button>
        <input placeholder='test search' onKeyUp={this.props.searchTest}/>
      </div>
    )
  }
}
