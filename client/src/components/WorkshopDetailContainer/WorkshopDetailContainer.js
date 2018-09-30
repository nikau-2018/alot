import React, {Component} from 'react'

import WorkshopDetail from '../WorkshopDetail'

export default class WorkshopDetailContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      workshop: {}
    }
  }

  componentDidMount () {
    this.props.fetchWorkshops()
      .then(() => {
        const [workshop] = this.props.workshops.filter(w => {
          return w.id === Number(this.props.match.params.id)
        })
        this.setState({workshop})
      })
  }

  render () {
    return (
      <div>
        {this.state.workshop && <WorkshopDetail workshop= {this.state.workshop} />}
      </div>
    )
  }
}
