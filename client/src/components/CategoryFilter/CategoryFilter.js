import React, {Component} from 'react'
import {Dropdown} from 'semantic-ui-react'

export default class CategoryFilter extends Component {
  componentDidMount () {
    this.props.fetchCategories()
  }

  // The below needs to be added into Tools Container and then passed down to CategoryFilter as props. Check to see if onClick in Dropdown.Item render is working.
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
