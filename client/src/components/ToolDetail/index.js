import {connect} from 'react-redux'

import ToolDetail from './ToolDetail'

const mapStateToProps = (state) => {
  return {
    categories: state.categories.categories
  }
}

export default connect(mapStateToProps)(ToolDetail)
