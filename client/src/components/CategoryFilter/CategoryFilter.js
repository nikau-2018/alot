import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {Dropdown} from 'semantic-ui-react'

import styles from './styles.css'

export default class CategoryFilter extends Component {
  componentDidMount () {
    this.props.fetchCategories()
  }

  render () {
    return (
      <div className={styles.categoryFilter}>
        <Dropdown text={this.props.categoryName}>
          <Dropdown.Menu className={styles.dropdownA}>
            <Link to={`/${this.props.type}`}>
              <Dropdown.Item className={styles.dropdown}
                text='All Categories'
                name='All'
              />
            </Link>
            {this.props.categories.map(category =>
              <Link to={`/${this.props.type}/${category.id}`} key={category.id}>
                <Dropdown.Item className={styles.dropdown}
                  text={`${category.name}`}
                  name={`${category.name}`}
                />
              </Link>
            )}
          </Dropdown.Menu>
        </Dropdown>
      </div>
    )
  }
}
