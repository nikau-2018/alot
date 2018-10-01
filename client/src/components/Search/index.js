import React, {Component} from 'react'
import {Input, Button} from 'semantic-ui-react'

import styles from './styles.css'

export default class Search extends Component {
  render () {
    return (
      <div>
        <Input placeholder='Search...' /> &nbsp;
        <Button>Search</Button>
      </div>
    )
  }
}
