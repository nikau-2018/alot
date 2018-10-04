import {REQUEST_WORKSHOPS, RECEIVE_WORKSHOPS, RECEIVE_WORKSHOPS_ERROR} from './actions'

const defaultState =
{
  workshops: [],
  error: null,
  ready: false
}

export default function (state = defaultState, {type, workshops, error}) {
  switch (type) {
    case REQUEST_WORKSHOPS:
      return {
        ...state,
        error: null,
        ready: false
      }
    case RECEIVE_WORKSHOPS:
      return {
        error: null,
        workshops,
        ready: true
      }
    case RECEIVE_WORKSHOPS_ERROR:
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
