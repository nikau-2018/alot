import {REQUEST_CATEGORIES, RECEIVE_CATEGORIES, RECEIVE_CATEGORIES_ERROR} from './actions'

const defaultState =
{
  categories: [],
  error: null,
  ready: false
}

export default function (state = defaultState, {type, categories, error}) {
  switch (type) {
    case REQUEST_CATEGORIES:
      return {
        ...state,
        error: null,
        ready: false
      }
    case RECEIVE_CATEGORIES:
      return {
        ...state,
        error: null,
        categories,
        ready: true
      }
    case RECEIVE_CATEGORIES_ERROR:
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
