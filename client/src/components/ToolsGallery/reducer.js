import {RECEIVE_TOOLS} from './actions'

function tools (state = [], action) {
  switch (action.type) {
    case RECEIVE_TOOLS:
      return action.tools

    default:
      return state
  }
}

export default tools
