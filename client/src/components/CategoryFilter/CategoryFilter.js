import React, {Component} from 'react'
import {Link} from 'react-router-dom'
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
          <Link to={`/${this.props.type}`}>
            <Dropdown.Item
              text='All'
              // onClick={() => this.props.filterCategory(0)}
            />
          </Link>
          {this.props.categories.map(category =>
            <Link to={`/${this.props.type}/${category.id}`} key={category.id}>
              <Dropdown.Item
                text={`${category.name}`}
                // Below to be taken out once tools/:category route working
                // onClick={() => this.props.filterCategory(category.id)}
              />
            </Link>
          )}
        </Dropdown.Menu>
      </Dropdown>
    )
  }
}
