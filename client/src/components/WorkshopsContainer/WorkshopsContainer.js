import React, {Component} from 'react'

import Workshops from '../Workshops'

export default class WorkshopsContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      selectedId: 0,
      filteredWorkshops: []
    }
  }

  componentDidMount () {
    this.props.fetchWorkshops()
      .then(() => {
        this.setState({selectedId: this.props.categories.find((cat) => (
          cat.name.toLowerCase() === this.props.match.params.category
        ))
        })
      })
    this.props.fetchCategories()
      .then()
  }

  render () {
    const {id} = this.props.categories.find((cat) => (
      cat.name.toLowerCase() === this.props.match.params.category
    ))
    const filteredWorkshops = this.props.workshops.filter((workshop) => (
      workshop.categoryId === id
    ))
    console.log(this.props.workshops)
    console.log(id)
    console.log(filteredWorkshops)
    return (
      <div className='workshops-container' >
        {
          this.props.match.params.category
            ? <Workshops
              workshops={filteredWorkshops}
              category={this.props.categories}/>
            : <Workshops
              workshops={this.props.workshops}
              category={this.props.categories}/>
        }
      </div>
    )
  }
}
