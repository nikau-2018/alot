import {connect} from 'react-redux'

import AddWorkshop from './AddWorkshop'
import {fetchWorkshops} from '../WorkshopsContainer/actions'

const mapStateToProps = (state) => {
  return {
    workshops: state.workshops.workshops,
    ready: state.workshops.ready
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchWorkshops: () => dispatch(fetchWorkshops())
})

export default connect(mapStateToProps, mapDispatchToProps)(AddWorkshop)
