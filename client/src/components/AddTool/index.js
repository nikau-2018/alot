import {connect} from 'react-redux'

import AddTool from './AddTool'
import {addTool} from './actions'

const mapStateToProps = (state) => {
  return {
    
  }
}

const mapDispatchToProps = () => ({
  addTool: () => dispatch(addTool())
})

export default connect(mapStateToProps, mapDispatchToProps)(AddTool)
