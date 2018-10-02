import {SEARCH_TOOL} from './actions'
import {SEARCH_WORKSHOP} from './actions'

export default function (state = '', action) {
  switch (action.type) {
    case SEARCH_TOOL:
      return action.searchTool
    default:
      return state
  }
}

export default function (state = '', action) {
  switch (action.type) {
    case SEARCH_WORKSHOP:
      return action.searchWorkshop
    default:
      return state
  }
}
