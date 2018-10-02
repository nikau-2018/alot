import React, {Component} from 'react'
import {Loader, Dimmer} from 'semantic-ui-react'

import Workshops from '../Workshops'

export default class WorkshopsContainer extends Component {
  componentDidMount () {
    this.props.fetchWorkshops()
  }

  render () {
    const category = this.props.match.params.category
    const workshops = this.props.workshops.filter(workshop => workshop.name.toLowerCase().includes(this.props.search.toLowerCase()))
    const filteredWorkshops = !category
      ? workshops
      : workshops.filter((workshop) => {
        return Number(category) === workshop.categoryId
      })
    return (
      <div>
        {this.props.workshops.length > 0
          ? <Workshops
            filteredWorkshops={filteredWorkshops}
            category={category}
          />
          : <Dimmer active inverted><Loader inverted>Loading</Loader></Dimmer>
        }
      </div>
    )
  }
}
