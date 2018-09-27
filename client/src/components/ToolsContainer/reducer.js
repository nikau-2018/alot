import {REQUEST_TOOLS, RECEIVE_TOOLS, RECEIVE_TOOLS_ERROR} from './actions'

const defaultState = {
  allTools: null,
  error: null,
  pending: false
}

export default function (state = defaultState, {type, allTools, error}) {
  switch (type) {
    case REQUEST_TOOLS:
      return {
        ...state,
        error: null,
        pending: true
      }
    case RECEIVE_TOOLS:
      return {
        ...state,
        error: null,
        allTools,
        pending:false
      }
    case RECEIVE_TOOLS_ERROR:
      return {
        ...state,
        error,
        allTools: null,
        pending: false
      }
    default:
      return state
  }
}
