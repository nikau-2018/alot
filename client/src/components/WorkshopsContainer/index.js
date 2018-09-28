import React, { Component } from 'react'

import Search from '../Search'
import CategoryFilter from '../CategoryFilter'
import WorkshopCard from '../WorkshopCard'

export default class WorkshopsContainer extends Component {
  render () {
    return (
      <div className='workshops-container' >
        <Search />
        <CategoryFilter />
        <WorkshopCard />
      </div>
    )
  }
}
