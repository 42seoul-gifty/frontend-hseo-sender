import { AxiosResponse } from 'axios'
import { call, put } from 'redux-saga/effects'
import {
  addOrder,
  setOrders,
  getOrders,
  toggleTodo,
  removeOrder,
} from 'store/actions/orders'
import {
  requestPostOrder,
  requestGetOrders,
  requestDeleteOrder,
  requestPatchOrder,
} from 'store/api'

// GET_TODO 액션 발생하면 api.get하여 응답 데이터 todolist로 state를 갱신함
export function* handleGetOrders() {
  try {
    const response: AxiosResponse = yield call(requestGetOrders)
    const { data } = response
    yield put(setOrders(data))
  } catch (error) {
    console.log(error)
  }
}

// ADD_TODO 액션 발생하면 payload의 content를 api.post하여 db에 todo를 추가하고
// GET_TODO 액션 발생시켜 state를 갱신함
export function* handleNewOrder(action: ReturnType<typeof addOrder>) {
  try {
    yield call(requestPostOrder, action.payload)
    yield put(getOrders())
  } catch (error) {
    console.log(error)
  }
}

// TOGGLE_TODO 액션 발생하면 payload의 id에 해당하는 todo에 대하여 api.patch하여 수정하고
// GET_TODO 액션 발생시켜 state를 갱신함
export function* handleToggleOrder(action: ReturnType<typeof toggleTodo>) {
  try {
    yield call(requestPatchOrder, action.payload)
    yield put(getOrders())
  } catch (error) {
    console.log(error)
  }
}

// REMOVE_TODO 액션 발생하면 payload의 id에 해당하는 todo에 대하여 api.delete하여 삭제하고
// GET_TODO 액션 발생시켜 state를 갱신함
export function* handleRemoveOrder(action: ReturnType<typeof removeOrder>) {
  try {
    yield call(requestDeleteOrder, action.payload)
    yield put(getOrders())
  } catch (error) {
    console.log(error)
  }
}
