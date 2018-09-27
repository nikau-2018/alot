import React, {Component} from 'react'
import {Dropdown} from 'semantic-ui-react'

export default class CategoryFilter extends Component {
  constructor (props) {
    super(props)
    this.state = {} // empty state, looks funny
  }
  componentDidMount () {
    this.props.fetchCategories()
  }

  render () {
    return (
      <Dropdown className= 'categories' text='Categories'>
        <Dropdown.Menu>
          {this.props.categories.map(category =>
            <Dropdown.Item
              text={`${category.name}`}
              key={category.id}
              onClick={this.props.filterCategory(category.id)}
            />
          )}
        </Dropdown.Menu>
      </Dropdown>
    )
  }
}
