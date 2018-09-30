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
    this.props.fetchCategories()
    this.props.ready &&
    this.setState({selectedId: this.props.categories.find((cat) => (
      cat.name.toLowerCase() === this.props.match.params.category))
    })
    this.props.ready &&
    this.setState({
      filteredWorkshops: this.props.workshops.filter((workshop) => (
        workshop.categoryId === this.state.selectedId))
    })
  }

  render () {
    console.log(this.state.selectedId)
    console.log(this.state.filteredWorkshops)
    return (
      this.props.ready
        ? <div className='workshops-container' >
          {
            this.props.match.params.category
              ? <Workshops
                workshops={this.state.filteredWorkshops}
                category={this.props.categories}/>
              : <Workshops
                workshops={this.props.workshops}
                category={this.props.categories}/>
          }
        </div>
        : <div>loading</div>
    )
  }
}
