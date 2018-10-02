import React from 'react'
import {Input} from 'semantic-ui-react'

import styles from './styles.css'

const Search = (props) => (
  props.toolSearch
    ? <div className={styles.search}>
      <Input placeholder='Search...' onKeyUp={props.searchStringTool} />
    </div>
    : <div className={styles.search}>
      <Input placeholder='Search...' onKeyUp={props.searchStringWorkshop} />
    </div>
)
export default Search
