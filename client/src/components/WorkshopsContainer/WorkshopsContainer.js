import React, {Component} from 'react'

import Workshops from '../Workshops'

export default class WorkshopsContainer extends Component {
  componentDidMount () {
    this.props.fetchWorkshops()
    this.props.fetchCategories()
  }
  
  render () {
    // const filteredWorkshops = this.state.displayedCategory === 0
    //   ? this.props.workshops
    //   : this.props.workshops.filter((workshops) => {
    //     return this.state.displayedCategory.includes(workshops.categoryId)
    //   })
      console.log(this.props.workshops)
    return (
      <div className='workshops-container' >
        <Workshops
          workshops={this.props.workshops}
          category={this.props.categories}/>
      </div>
    )
  }
}
