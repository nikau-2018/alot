import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {Dropdown} from 'semantic-ui-react'

export default class CategoryFilter extends Component {
  componentDidMount () {
    this.props.fetchCategories()
  }

  render () {
    return (
      <Dropdown className= 'categories' text={this.props.categoryName}>
        <Dropdown.Menu>
          <Link to={this.props.type}>
            <Dropdown.Item
              text='All'
              name='All'
            />
          </Link>
          {this.props.categories.map(category =>
            <Link to={`/${this.props.type}/${category.id}`} key={category.id}>
              <Dropdown.Item
                text={`${category.name}`}
                name={`${category.name}`}
              />
            </Link>
          )}
        </Dropdown.Menu>
      </Dropdown>
    )
  }
}
