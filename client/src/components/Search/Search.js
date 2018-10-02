import React, {Component} from 'react'
import {Input} from 'semantic-ui-react'

import styles from './styles.css'

export default class Search extends Component {
  render () {
    return (
      <div className={styles.search}>
        <Input placeholder='Search...' onKeyUp={this.props.searchString} icon='search' size='large' />
      </div>
    )
  }
}
