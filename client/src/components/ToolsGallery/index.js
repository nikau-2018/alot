import {connect} from 'react-redux'

import {fetchTools} from './actions'

import ToolsGallery from './ToolsGallery'

const mapStateToProps = (state) => {
  return {
    tools: state.tools
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchTools: () => dispatch(fetchTools())
})

export default connect(mapStateToProps, mapDispatchToProps)(ToolsGallery)
