import { all, takeLatest } from 'redux-saga/effects'
import {
  handleGetTodos,
  handleNewTodo,
  handleToggleTodo,
  handleRemoveTodo,
} from './todos'
import {
  GET_TODOS,
  ADD_TODO,
  TOGGLE_TODO,
  REMOVE_TODO,
} from 'store/actions/todos'

export function* watcherSaga() {
  yield all([
    takeLatest(GET_TODOS, handleGetTodos),
    takeLatest(ADD_TODO, handleNewTodo),
    takeLatest(TOGGLE_TODO, handleToggleTodo),
    takeLatest(REMOVE_TODO, handleRemoveTodo),
  ])
}
