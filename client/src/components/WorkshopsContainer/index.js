import {connect} from 'react-redux'

import {fetchWorkshops} from './actions'

import WorkshopsContainer from './WorkshopsContainer'

import styles from './styles.css'

const mapStateToProps = (state) => {
  return {
    workshops: state.workshops.workshops,
    search: state.search
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchWorkshops: () => dispatch(fetchWorkshops())
})

export default connect(mapStateToProps, mapDispatchToProps)(WorkshopsContainer)
