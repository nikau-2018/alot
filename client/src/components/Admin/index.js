import {connect} from 'react-redux'

import {fetchOrders} from './actions'

import Admin from './Admin'

import styles from './styles.css'

const mapStateToProps = (state) => {
  return {
    orders: state.orders.orders
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchOrders: () => dispatch(fetchOrders())
})

export default connect(mapStateToProps, mapDispatchToProps)(Admin)
