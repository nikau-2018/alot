import request from 'axios'
import {saveUserToken} from '../utils/auth'

export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'

function requestLogin () {
  return {
    type: LOGIN_REQUEST,
    isFetching: true,
    isAuthenticated: false
  }
}

export function receiveLogin (user) {
  return {
    type: LOGIN_SUCCESS,
    isFetching: false,
    isAuthenticated: true,
    user
  }
}

function loginError (message) {
  return {
    type: LOGIN_FAILURE,
    isFetching: false,
    isAuthenticated: false,
    message
  }
}

// Calls the API to get a token and
// dispatches actions along the way
export function loginUser (creds) {
  return dispatch => {
    // We dispatch requestLogin to kickoff the call to the API
    dispatch(requestLogin(creds))

    return request.post('/api/v1/users/login', creds)
      .then((response) => {
        if (!response.data.ok) {
          // If there was a problem, we want to
          // dispatch the error condition
          dispatch(loginError(response.data.message))
          return Promise.reject(response.data.message)
        } else {
          // If login was successful, set the token in local storage
          const userInfo = saveUserToken(response.data.token)
          // Dispatch the success action
          dispatch(receiveLogin(userInfo))
        }
      }).catch(err => dispatch(loginError(err.response.data.message)))
  }
}
