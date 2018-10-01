import {REQUEST_TOOLS, RECEIVE_TOOLS, RECEIVE_TOOLS_ERROR} from './actions'

const defaultState = {
  tools: [],
  error: null,
  ready: false
}

export default function (state = defaultState, {type, tools, error}) {
  switch (type) {
    case REQUEST_TOOLS:
      return {
        ...state,
        error: null,
        ready: false
      }
    case RECEIVE_TOOLS:
      return {
        ...state,
        error: null,
        tools,
        ready: true
      }
    case RECEIVE_TOOLS_ERROR:
      return {
        ...state,
        error,
        tools: null,
        ready: false
      }
    default:
      return state
  }
}
