import {REQUEST_ORDERS, RECEIVE_ORDERS, RECEIVE_ORDERS_ERROR} from './actions'

// const defaultState = {
//   orders: [{
//     id: 66601,
//     userId: 44401,
//     toolId: 55501,
//     notes: 'Will pick up on Saturday morning',
//     status: 1,
//     createdAt: '2018-09-29 09:59:59',
//     updatedAt: '2018-09-29 09:59:59'
//   }],
//   error: null,
//   pending: false
// }

export default function (state = {}, {type, orders, error}) {
  switch (type) {
    case REQUEST_ORDERS:
      return {
        ...state,
        error: null,
        pending: true
      }
    case RECEIVE_ORDERS:
      return {
        ...state,
        error: null,
        orders,
        pending: false
      }
    case RECEIVE_ORDERS_ERROR:
      return {
        ...state,
        error,
        orders: null,
        pending: false
      }
    default:
      return state
  }
}
