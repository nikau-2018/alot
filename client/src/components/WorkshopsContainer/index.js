import {connect} from 'react-redux'

import {fetchWorkshops} from './actions'

import WorkshopsContainer from './WorkshopsContainer'

import styles from './styles.css'

const mapStateToProps = (state) => {
  return {
    workshops: state.workshops.workshops,
    searchWorkshop: state.searchWorkshop,
    ready: state.workshops.ready
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchWorkshops: () => dispatch(fetchWorkshops())
})

export default connect(mapStateToProps, mapDispatchToProps)(WorkshopsContainer)
