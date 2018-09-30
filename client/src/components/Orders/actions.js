import request from 'axios'

export const RECEIVE_ORDERS_ERROR = 'RECEIVE_ORDERS_ERROR'
export const REQUEST_ORDERS = 'REQUEST_ORDERS'
export const RECEIVE_ORDERS = 'RECEIVE_ORDERS'

export const showError = error => ({
  type: RECEIVE_ORDERS_ERROR,
  error
})

export const requestOrders = () => ({
  type: REQUEST_ORDERS
})

export const receiveOrders = orders => ({
  type: RECEIVE_ORDERS,
  orders
})

export const fetchOrders = () => {
  return (dispatch) => {
    dispatch(requestOrders())
    return request
      .get('/api/v1/orders')
      .then(res => {
        dispatch(receiveOrders(res.data.orders))
      })
      .catch(err => {
        dispatch(showError(err.message))
      })
  }
}
