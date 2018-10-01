import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {Dropdown} from 'semantic-ui-react'

export default class CategoryFilter extends Component {
  constructor (props) {
    super(props)
    this.state = {
      selected: 'Categories'
    }
  }

  componentDidMount () {
    this.props.fetchCategories()
    // const categoryId = this.props.match.params.category    
    // categoryId && this.setState({
    //   selected: categoryId
    // })
  }

  handleClick = (e) => {
    this.setState({
      selected: e.target.name
    })
  }

  render () {
    console.log(this.props.category)
    return (
      <Dropdown className= 'categories' text={this.state.selected}>
        <Dropdown.Menu>
          <Link to={this.props.type}>
            <Dropdown.Item
              text='All'
              name='All'
              onClick={() => {this.setState({selected: 'Categories'})}}
            />
          </Link>
          {this.props.categories.map(category =>
            <Link to={`/${this.props.type}/${category.id}`} key={category.id}>
              <Dropdown.Item
                text={`${category.name}`}
                name={`${category.name}`}
                onClick={() => {this.setState({selected: category.name})}}
              />
            </Link>
          )}
        </Dropdown.Menu>
      </Dropdown>
    )
  }
}
