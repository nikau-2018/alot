import {connect} from 'react-redux'

import {fetchTools} from '../ToolsContainer/actions'

import ToolsGallery from './ToolsGallery'

import styles from './styles.css'

const mapStateToProps = (state) => {
  return {
    tools: state.tools.tools
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchTools: () => dispatch(fetchTools())
})

export default connect(mapStateToProps, mapDispatchToProps)(ToolsGallery)
