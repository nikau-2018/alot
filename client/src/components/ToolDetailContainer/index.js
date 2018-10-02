import {connect} from 'react-redux'

import {fetchTools} from '../ToolsContainer/actions'

import ToolDetailContainer from './ToolDetailContainer'

import styles from './styles.css'

const mapStateToProps = (state) => {
  return {
    tools: state.tools.tools,
    isAdmin: state.auth.isAdmin
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchTools: () => dispatch(fetchTools())
})

export default connect(mapStateToProps, mapDispatchToProps)(ToolDetailContainer)
