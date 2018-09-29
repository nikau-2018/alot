import React, {Component} from 'react'

import Workshops from '../Workshops'

export default class WorkshopsContainer extends Component {
  componentDidMount () {
    this.props.fetchWorkshops()
    this.props.fetchCategories()
  }
  
  render () {
    const workshopId = this.props.categories.find((cat) => {
      cat.name == this.props.match.params.category
    })
    const filteredWorkshops = this.props.workshops.map((workshop) => (
      workshop.id === workshopId
    ))
      console.log(this.props.categories)
      console.log(typeof this.props.match.params.category)
      console.log(workshopId)
    return (
      <div className='workshops-container' >
      {
        this.props.match.params.category
        ? <Workshops
        workshops={this.props.workshops}
        category={this.props.categories}/>
        : <Workshops
        workshops={this.props.workshops}
        category={this.props.categories}/>
      }
      </div>
    )
  }
}
