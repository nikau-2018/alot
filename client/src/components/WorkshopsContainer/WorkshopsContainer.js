import React, {Component} from 'react'

import Workshops from '../Workshops'

export default class WorkshopsContainer extends Component {
  componentDidMount () {
    this.props.fetchWorkshops()
    this.props.fetchCategories()
  }

  render () {
    if (this.props.ready) {
      let filteredWorkshops = 0
      if (this.props.match.params.category) {
        const out = this.props.categories.find((cat) => (
          cat.name.toLowerCase() == this.props.match.params.category
        ))
        filteredWorkshops = this.props.workshops.filter((workshop) => (
          workshop.categoryId === out.id
        ))
      }
      return (
        <div className='workshops-container' >
          {
            <Workshops
              workshops={filteredWorkshops || this.props.workshops}
              category={this.props.categories}/>
          }
        </div>
      )
    } else {
      return (<div>loading</div>)
    }
  }
}
