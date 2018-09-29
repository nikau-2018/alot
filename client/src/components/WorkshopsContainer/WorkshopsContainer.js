import React, {Component} from 'react'

import Workshops from '../Workshops'

export default class WorkshopsContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      workshops: [],
      displayedCategory: []
    }
  }

  componentDidMount () {
    this.props.fetchWorkshops()
      .then(() => {
        this.setState({
          workshops: this.props.workshops,
          category: this.props.match.params.category
        })
      })
  }

  render () {
    const filteredWorkshops = this.state.displayedCategory === 0
      ? this.props.workshops
      : this.props.workshops.filter((workshops) => {
        return this.state.displayedCategory.includes(workshops.categoryId)
      })

    return (
      <div className='workshops-container' >
        <Workshops
          filteredWorkshops={filteredWorkshops}
          category={this.state.category}/>
      </div>
    )
  }
}
