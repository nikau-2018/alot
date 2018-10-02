import React from 'react'
import {Input} from 'semantic-ui-react'

const Search = (props) => (
  this.props.parent
    ? <div>
      <Input placeholder='Search...' onKeyUp={props.searchStringTool} />
    </div>
    : <div>
      <Input placeholder='Search...' onKeyUp={props.searchStringWorkshop} />
    </div>
)
export default Search
