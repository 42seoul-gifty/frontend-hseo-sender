import { Itodo } from 'config'

export const GET_TODOS = 'GET_TODOS' as const
export const SET_TODOS = 'SET_TODOS' as const
export const ADD_TODO = 'ADD_TODO' as const
export const REMOVE_TODO = 'REMOVE_TODO' as const
export const TOGGLE_TODO = 'TOGGLE_TODO' as const

export type toggleObject = {
  id: string
  isChecked: boolean
}

export const getTodos = () => ({
  type: GET_TODOS,
})

export const setTodos = (todos: Itodo[]) => ({
  type: SET_TODOS,
  payload: todos,
})

export const addTodo = (text: string) => ({
  type: ADD_TODO,
  payload: text,
})

export const removeTodo = (id: string) => ({
  type: REMOVE_TODO,
  payload: id,
})

export const toggleTodo = (obj: toggleObject) => ({
  type: TOGGLE_TODO,
  payload: obj,
})

export type TodoAction =
  | ReturnType<typeof addTodo>
  | ReturnType<typeof removeTodo>
  | ReturnType<typeof toggleTodo>
  | ReturnType<typeof getTodos>
  | ReturnType<typeof setTodos>
