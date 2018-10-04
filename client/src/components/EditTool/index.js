import {connect} from 'react-redux'

import EditTool from './EditTool'
import {fetchCategories} from '../CategoryFilter/actions'
import {fetchTools} from '../ToolsContainer/actions'

const mapStateToProps = (state) => {
  return {
    tools: state.tools.tools,
    categories: state.categories.categories,
    ready: state.tools.ready && state.categories.ready
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCategories: () => dispatch(fetchCategories()),
  fetchTools: () => dispatch(fetchTools())
})

export default connect(mapStateToProps, mapDispatchToProps)(EditTool)
