import {SEARCH_TOOL} from './actions'
import {SEARCH_WORKSHOP} from './actions'

export function searchTool (state = '', action) {
  switch (action.type) {
    case SEARCH_TOOL:
      return action.searchTool
    default:
      return state
  }
}

export function searchWorkshopReducer (state = '', action) {
  switch (action.type) {
    case SEARCH_WORKSHOP:
      return action.searchWorkshop
    default:
      return state
  }
}
