import {SEARCH_TOOL} from './actions'

export default function (state = '', action) {
  switch (action.type) {
    case SEARCH_TOOL:
      return action.searchTool
    default:
      return state
  }
}
