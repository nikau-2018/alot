// import {LOGOUT_SUCCESS} from './logout/actions'
import {REGISTER_REQUEST, REGISTER_FAILURE} from './Register/actions'
import {LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE} from './Login/actions'
import {isAuthenticated, getUserTokenInfo} from './utils/auth'

const initialState = {
  isFetching: false,
  isAuthenticated: isAuthenticated(),
  user: getUserTokenInfo(),
  errorMessage: ''
}

export default function auth (state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isFetching: true,
        isAuthenticated: false,
        errorMessage: ''
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isAuthenticated: true,
        user: action.user
      }
    case LOGIN_FAILURE:
      return {
        ...state,
        isFetching: false,
        isAuthenticated: false,
        errorMessage: action.message
      }
    // case LOGOUT_SUCCESS:
    //   return {
    //     ...state,
    //     isFetching: false,
    //     isAuthenticated: false,
    //     user: null
    //   }
    case REGISTER_REQUEST:
      return {
        ...state,
        isFetching: true,
        isAuthenticated: false,
        errorMessage: ''
      }
    case REGISTER_FAILURE:
      return {
        ...state,
        isFetching: false,
        isAuthenticated: false,
        errorMessage: action.message
      }
    default:
      return state
  }
}
