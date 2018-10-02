import axios from 'axios'

export const REQUEST_USERS = 'REQUEST_USERS'
export const RECEIVE_USERS = 'RECEIVE_USERS'
export const RECEIVE_USERS_ERROR = 'RECEIVE_USERS_ERROR'

export const showError = error => ({
  type: RECEIVE_USERS_ERROR,
  error
})

export const requestUsers = () => ({
  type: REQUEST_USERS
})

export const receiveUsers = users => ({
  type: RECEIVE_USERS,
  users
})

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(requestUsers())
    axios
      .get('/api/v1/users/getusers')
      .then(res => {
        dispatch(receiveUsers(res.data.users))
      })
      .catch(err => {
        dispatch(showError(err.message))
      })
  }
}
