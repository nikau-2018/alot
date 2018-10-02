import axios from 'axios'

export const RECEIVE_WORKSHOPS_ERROR = 'RECEIVE_ WORKSHOPS_ERROR'
export const REQUEST_WORKSHOPS = 'REQUEST_ WORKSHOPS'
export const RECEIVE_WORKSHOPS = 'RECEIVE_ WORKSHOPS'

export const showError = error => ({
  type: RECEIVE_WORKSHOPS_ERROR,
  error
})

export const requestWorkshops = () => ({
  type: REQUEST_WORKSHOPS
})

export const receiveWorkshops = workshops => ({
  type: RECEIVE_WORKSHOPS,
  workshops
})

export const fetchWorkshops = () => {
  return (dispatch) => {
    dispatch(requestWorkshops())
    return axios
      .get('/api/v1/workshops')
      .then(res => {
        dispatch(receiveWorkshops(res.data.workshops))
      })
      .catch(err => {
        dispatch(showError(err.message))
      })
  }
}
