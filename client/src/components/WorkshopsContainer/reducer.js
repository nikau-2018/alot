import {REQUEST_WORKSHOPS, RECEIVE_WORKSHOPS, RECEIVE_WORKSHOPS_ERROR} from './actions'

const defaultState =
{
  workshops: [],
  error: null,
  pending: false
}

export default function (state = defaultState, {type, workshops, error}) {
  switch (type) {
    case REQUEST_WORKSHOPS:
      return {
        ...state,
        error: null,
        pending: true
      }
    case RECEIVE_WORKSHOPS:
      return {
        ...state,
        error: null,
        workshops,
        pending: false
      }
    case RECEIVE_WORKSHOPS_ERROR:
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
