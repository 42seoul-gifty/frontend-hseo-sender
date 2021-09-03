import { Iorder } from 'config'

export const GET_ORDERS = 'GET_ORDERS' as const
export const SET_ORDERS = 'SET_ORDERS' as const
export const ADD_ORDER = 'ADD_ORDER' as const
export const REMOVE_ORDER = 'REMOVE_ORDER' as const
export const TOGGLE_ORDER = 'TOGGLE_ORDER' as const

export type toggleObject = {
  id: string
  isChecked: boolean
}

export type newOrder = {
  giver_name: string
  giver_phone: string
  receiver_name: string
  receiver_phone: string
  gender: string
  age: string
  price: string
}

export const getOrders = () => ({
  type: GET_ORDERS,
})

export const setOrders = (Orders: Iorder[]) => ({
  type: SET_ORDERS,
  payload: Orders,
})

export const addOrder = (obj: newOrder) => ({
  type: ADD_ORDER,
  payload: obj,
})

export const removeOrder = (id: string) => ({
  type: REMOVE_ORDER,
  payload: id,
})

export const toggleTodo = (obj: toggleObject) => ({
  type: TOGGLE_ORDER,
  payload: obj,
})

export type TodoAction =
  | ReturnType<typeof addOrder>
  | ReturnType<typeof removeOrder>
  | ReturnType<typeof toggleTodo>
  | ReturnType<typeof getOrders>
  | ReturnType<typeof setOrders>
