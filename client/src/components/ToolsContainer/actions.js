import axios from 'axios'
import {get} from '../Auth/utils/localstorage'

export const RECEIVE_TOOLS_ERROR = 'RECEIVE_TOOLS_ERROR'
export const REQUEST_TOOLS = 'REQUEST_TOOLS'
export const RECEIVE_TOOLS = 'RECEIVE_TOOLS'

export const showError = error => ({
  type: RECEIVE_TOOLS_ERROR,
  error
})

export const requestTools = () => ({
  type: REQUEST_TOOLS
})

export const receiveTools = tools => ({
  type: RECEIVE_TOOLS,
  tools
})

axios.defaults.headers.common['Authorization'] = `Bearer ${get('token')}`

export const fetchTools = () => {
  return (dispatch) => {
    dispatch(requestTools())
    return axios
      .get('/api/v1/tools')
      .then(res => {
        dispatch(receiveTools(res.data.tools))
      })
      .catch(err => {
        dispatch(showError(err.message))
      })
  }
}
