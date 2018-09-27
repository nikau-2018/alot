import React, {Component} from 'react'
import {Dropdown} from 'semantic-ui-react'

export default class CategoryFilter extends Component {
  componentDidMount () {
    this.props.fetchCategories()
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
