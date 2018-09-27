import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Dropdown} from 'semantic-ui-react'

import {fetchCategories} from './actions'

class CategoryFilter extends Component {
  componentDidMount () {
    this.props.dispatch(fetchCategories())
  }

  // THE BELOW NEEDS TO BE ADDED INTO TOOLS CONTAINER AND THEN PASSED DOWN AS PROPS TO THIS COMPONENT
  // onClick (e) {
  //   this.setState({
  //     category: e.target.text
  //   })
  // }

  render () {
    return (
      <Dropdown className= 'categories' text='Categories'>
        <Dropdown.Menu>
          {this.props.categories.map(category =>
            <Dropdown.Item text={`${category.name}`} key={category.id} onClick={this.props.onClick} />
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
