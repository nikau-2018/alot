import {connect} from 'react-redux'

import {fetchWorkshops} from './actions'

import WorkshopsContainer from './WorkshopsContainer'

const mapStateToProps = (state) => {
  return {
    workshops: state.workshops.workshops
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchWorkshops: () => dispatch(fetchWorkshops())
})

export default connect(mapStateToProps, mapDispatchToProps)(WorkshopsContainer)
