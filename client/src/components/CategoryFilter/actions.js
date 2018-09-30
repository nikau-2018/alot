import request from 'axios'

export const RECEIVE_CATEGORIES_ERROR = 'RECEIVE_ CATEGORIES_ERROR'
export const REQUEST_CATEGORIES = 'REQUEST_ CATEGORIES'
export const RECEIVE_CATEGORIES = 'RECEIVE_ CATEGORIES'

export const showError = error => ({
  type: RECEIVE_CATEGORIES_ERROR,
  error
})

export const requestCategories = () => ({
  type: REQUEST_CATEGORIES
})

export const receiveCategories = categories => ({
  type: RECEIVE_CATEGORIES,
  categories
})

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
