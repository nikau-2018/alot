import {connect} from 'react-redux'

import {fetchTools} from '../ToolsContainer/actions'

import WelcomeContainer from './WelcomeContainer'

const mapStateToProps = (state) => {
  return {
    tools: state.tools.tools
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchTools: () => dispatch(fetchTools())
})

export default connect(mapStateToProps, mapDispatchToProps)(WelcomeContainer)
