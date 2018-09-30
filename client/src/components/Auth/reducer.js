import {LOGOUT_SUCCESS} from './Logout/actions'
import {REGISTER_REQUEST, REGISTER_FAILURE} from './Register/actions'
import {LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE} from './Login/actions'
import {isAuthenticated, getUserTokenInfo, isAdmin} from './utils/auth'

const initialState = {
  isFetching: false,
  isAuthenticated: isAuthenticated(),
  user: getUserTokenInfo(),
  isAdmin: isAdmin(),
  errorMessage: ''
}

export default function auth (state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isFetching: true,
        isAuthenticated: false,
        isAdmin: false,
        errorMessage: ''
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isAuthenticated: true,
        isAdmin: isAdmin(),
        user: action.user
      }
    case LOGIN_FAILURE:
      return {
        ...state,
        isFetching: false,
        isAuthenticated: false,
        isAdmin: false,
        errorMessage: action.message
      }
    case LOGOUT_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isAuthenticated: false,
        isAdmin: false,
        user: null
      }
    case REGISTER_REQUEST:
      return {
        ...state,
        isFetching: true,
        isAuthenticated: false,
        isAdmin: false,
        errorMessage: ''
      }
    case REGISTER_FAILURE:
      return {
        ...state,
        isFetching: false,
        isAuthenticated: false,
        isAdmin: false,
        errorMessage: action.message
      }
    default:
      return state
  }
}
