import {combineReducers} from 'redux'

// Import the reducers here from the component file
// e.g import register from './components/Register/reducer'
import categories from './components/CategoryFilter/reducer'
import allTools from './components/ToolsContainer/reducer'

export default combineReducers({
  categories,
  allTools
})
