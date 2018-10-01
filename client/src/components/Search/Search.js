import React, {Component} from 'react'
import {Input} from 'semantic-ui-react'

export default class Search extends Component {
  render () {
    return (
      <div>
        <Input placeholder='Search...' onKeyUp={this.props.searchTest} /> &nbsp;
        {/* <Button>Search</Button> */}
      </div>
    )
  }
}
