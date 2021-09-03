import { AxiosResponse } from 'axios'
import { call, put } from 'redux-saga/effects'
import {
  addTodo,
  setTodos,
  getTodos,
  toggleTodo,
  removeTodo,
} from 'store/actions/todos'
import {
  requestPostTodo,
  requestGetTodos,
  requestDeletTodo,
  requestPatchTodo,
} from 'store/api'

// GET_TODO 액션 발생하면 api.get하여 응답 데이터 todolist로 state를 갱신함
export function* handleGetTodos() {
  try {
    const response: AxiosResponse = yield call(requestGetTodos)
    const { data } = response
    yield put(setTodos(data))
  } catch (error) {
    console.log(error)
  }
}

// ADD_TODO 액션 발생하면 payload의 content를 api.post하여 db에 todo를 추가하고
// GET_TODO 액션 발생시켜 state를 갱신함
export function* handleNewTodo(action: ReturnType<typeof addTodo>) {
  try {
    yield call(requestPostTodo, action.payload)
    yield put(getTodos())
  } catch (error) {
    console.log(error)
  }
}

// TOGGLE_TODO 액션 발생하면 payload의 id에 해당하는 todo에 대하여 api.patch하여 수정하고
// GET_TODO 액션 발생시켜 state를 갱신함
export function* handleToggleTodo(action: ReturnType<typeof toggleTodo>) {
  try {
    yield call(requestPatchTodo, action.payload)
    yield put(getTodos())
  } catch (error) {
    console.log(error)
  }
}

// REMOVE_TODO 액션 발생하면 payload의 id에 해당하는 todo에 대하여 api.delete하여 삭제하고
// GET_TODO 액션 발생시켜 state를 갱신함
export function* handleRemoveTodo(action: ReturnType<typeof removeTodo>) {
  try {
    yield call(requestDeletTodo, action.payload)
    yield put(getTodos())
  } catch (error) {
    console.log(error)
  }
}
