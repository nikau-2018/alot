import React, {Component} from 'react'
import {Input, Button} from 'semantic-ui-react'

export default class Nav extends Component {
  render () {
    return (
      <div>
        <Input placeholder='Search...' /> &nbsp;
        <Button>Search</Button>
      </div>
    )
  }
}
