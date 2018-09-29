import React, {Component} from 'react'

import Workshops from '../Workshops'

export default class WorkshopsContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      workshops: [],
      category: [77701, 77702, 77703, 77704]
    }
  }

  componentDidMount () {
    this.props.fetchWorkshops()
      .then(() => {
        this.setState({
          workshops: this.props.workshops
        })
      })
  }
  render () {
    return (
      <div className='workshops-container' >
        <Workshops
          workshops={this.state.workshops}
          category={this.state.category}/>
      </div>
    )
  }
}
