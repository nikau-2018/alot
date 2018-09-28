import request from 'axios'

export const SHOW_ERROR = 'SHOW_ERROR'
export const RECEIVE_TOOLS = 'RECEIVE_TOOLS'
export const REQUEST_TOOLS = 'REQUEST_TOOLS'

export const showError = (errorMessage) => {
  return {
    type: SHOW_ERROR,
    errorMessage: errorMessage
  }
}

export const requestTools = () => {
  return {
    type: REQUEST_TOOLS
  }
}

export const receiveTools = (tools) => {
  return {
    type: RECEIVE_TOOLS,
    tools: tools
  }
}

export function fetchTools () {
  return (dispatch) => {
    dispatch(requestTools())
    return request
      .get('/api/v1/tools')
      .then(res => {
        dispatch(receiveTools(res.data.tools))
      })
      .catch(err => {
        dispatch(showError(err.message))
      })
  }
}
