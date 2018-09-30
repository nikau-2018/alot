import {REQUEST_CATEGORIES, RECEIVE_CATEGORIES, RECEIVE_CATEGORIES_ERROR} from './actions'

const defaultState =
{
  categories: [],
  error: null,
  pending: false
}

export default function (state = defaultState, {type, categories, error}) {
  switch (type) {
    case REQUEST_CATEGORIES:
      return {
        ...state,
        error: null,
        pending: true
      }
    case RECEIVE_CATEGORIES:
      return {
        ...state,
        error: null,
        categories,
        pending: false
      }
    case RECEIVE_CATEGORIES_ERROR:
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
