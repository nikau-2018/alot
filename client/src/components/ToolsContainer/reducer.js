import {REQUEST_TOOLS, RECEIVE_TOOLS, RECEIVE_TOOLS_ERROR} from './actions'

const defaultState = {
  tools: null,
  error: null,
  pending: false
}

export default function (state = defaultState, {type, tools, error}) {
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
        tools,
        pending:false
      }
    case RECEIVE_TOOLS_ERROR:
      return {
        ...state,
        error,
        tools: null,
        pending: false
      }
    default:
      return state
  }
}
