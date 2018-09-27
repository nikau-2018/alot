import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Dropdown} from 'semantic-ui-react'

import {fetchCategories} from './actions'

class CategoryFilter extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  componentDidMount () {
    this.props.dispatch(fetchCategories())
  }

  render () {
    return (
      <Dropdown className= 'categories' text='Categories'>
        <Dropdown.Menu>
          {this.props.categories.map(category =>
            <Dropdown.Item text={`${category.name}`} key={category.id}/>
          )}
        </Dropdown.Menu>
      </Dropdown>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories
  }
}

export default connect(mapStateToProps)(CategoryFilter)
