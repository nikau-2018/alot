import {removeUser} from '../Auth/utils/auth'

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST'
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE'

function requestLogout () {
  return {
    type: LOGOUT_REQUEST
  }
}

function receiveLogout () {
  return {
    type: LOGOUT_SUCCESS
  }
}

// Logs the user out
export function logoutUser () {
  return dispatch => {
    dispatch(requestLogout())
    removeUser()
    dispatch(receiveLogout())
  }
}
