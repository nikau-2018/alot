import {connect} from 'react-redux'

import {fetchWorkshops} from '../WorkshopsContainer/actions'

import WorkshopDetailContainer from './WorkshopDetailContainer'

import styles from './styles.css'

const mapStateToProps = (state) => {
  return {
    workshops: state.workshops.workshops,
    isAdmin: state.auth.isAdmin
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchWorkshops: () => dispatch(fetchWorkshops())
})

export default connect(mapStateToProps, mapDispatchToProps)(WorkshopDetailContainer)
