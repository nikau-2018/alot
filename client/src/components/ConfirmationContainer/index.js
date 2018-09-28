import {connect} from 'react-redux'

import Confirmation from './Confirmation'

const mapStateToProps = (state) => {
  return {
    tools: state.tools.tools
  }
}

export default connect(mapStateToProps)(Confirmation)
