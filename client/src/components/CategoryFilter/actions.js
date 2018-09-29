import request from 'axios'

export const SHOW_ERROR = 'SHOW_ERROR'
export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES'
export const REQUEST_CATEGORIES = 'REQUEST_CATEGORIES'
export const ADD_TOOL_CATEGORY_FILTER = 'ADD_TOOL_CATEGORY_FILTER'
export const ADD_WORKSHOP_CATEGORY_FILTER = 'ADD_WORKSHOP_CATEGORY_FILTER'

export const showError = (errorMessage) => {
  return {
    type: SHOW_ERROR,
    errorMessage: errorMessage
  }
}

export const requestCategories = () => {
  return {
    type: REQUEST_CATEGORIES
  }
}

export const receiveCategories = (categories) => {
  return {
    type: RECEIVE_CATEGORIES,
    categories: categories
  }
}

export function fetchCategories () {
  return (dispatch) => {
    dispatch(requestCategories())
    return request
      .get('/api/v1/categories')    
      .then(res => {
        dispatch(receiveCategories(res.data.categories))
      })
      .catch(err => {
        dispatch(showError(err.message))
      })
  }
}
