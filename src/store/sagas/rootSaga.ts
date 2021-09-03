import { all, takeLatest } from 'redux-saga/effects'
import {
  handleGetOrders,
  handleNewOrder,
  handleToggleOrder,
  handleRemoveOrder,
} from './orders'
import {
  GET_ORDERS,
  ADD_ORDER,
  TOGGLE_ORDER,
  REMOVE_ORDER,
} from 'store/actions/orders'

export function* watcherSaga() {
  yield all([
    takeLatest(GET_ORDERS, handleGetOrders),
    takeLatest(ADD_ORDER, handleNewOrder),
    takeLatest(TOGGLE_ORDER, handleToggleOrder),
    takeLatest(REMOVE_ORDER, handleRemoveOrder),
  ])
}
