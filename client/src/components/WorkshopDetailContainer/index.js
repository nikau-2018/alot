import React, { Component } from 'react'

import WorkshopDetail from '../WorkshopDetail'

export default class WorkshopDetailContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      workshop: {}
    }
  }

componentDidMount () {
  this.props.
}

  render () {
    return (
      <div className='workshop-detail-container' >
        <WorkshopDetail />
      </div>
    )
  }
}
