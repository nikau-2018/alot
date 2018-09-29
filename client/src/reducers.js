import {combineReducers} from 'redux'

// Import the reducers here from the component file
// e.g import register from './components/Register/reducer'
import { categories } from './components/CategoryFilter/reducer'
import tools from './components/ToolsContainer/reducer'
import auth from './components/Auth/reducer'
import workshops from './components/WorkshopsContainer/reducer'

export default combineReducers({
  categories,
  tools,
  auth,
  workshops
})
