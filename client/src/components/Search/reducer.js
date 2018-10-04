import {SEARCH_TOOL, SEARCH_WORKSHOP} from './actions'

export function searchTool (state = '', action) {
  switch (action.type) {
    case SEARCH_TOOL:
      return action.searchTool
    default:
      return state
  }
}

export function searchWorkshop (state = '', action) {
  switch (action.type) {
    case SEARCH_WORKSHOP:
      return action.searchWorkshop
    default:
      return state
  }
}
