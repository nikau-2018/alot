import {connect} from 'react-redux'

import {fetchOrders} from './actions'

import Orders from './Orders'

const mapStateToProps = (state) => {
  return {
    orders: state.orders.orders
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchOrders: () => dispatch(fetchOrders())
})

export default connect(mapStateToProps, mapDispatchToProps)(Orders)
