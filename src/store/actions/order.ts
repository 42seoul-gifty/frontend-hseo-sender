import { Iorder } from 'config'
/*
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

export const addOrder = () => ({
  type: ADD_ORDER,
})

export const removeOrder = (id: string) => ({
  type: REMOVE_ORDER,
  payload: id,
})

export const toggleTodo = (obj: toggleObject) => ({
  type: TOGGLE_ORDER,
  payload: obj,
})

export const SET_GIVER_NAME = 'GET_ORDERS' as const
export const SET_GIVER_PHONE = 'SET_GIVER_PHONE' as const
export const SET_RECEIVER_NAME = 'SET_RECEIVER_NAME' as const
export const SET_RECEIVER_PHONE = 'SET_RECEIVER_PHONE' as const
export const SET_GENDER = 'SET_GENDER' as const
export const SET_AGE = 'SET_AGE' as const
export const SET_PRICE = 'SET_PRICE' as const

export const setGiverName = () => ({
  type: SET_GIVER_NAME,
})

export const setGiverPhone = () => ({
  type: SET_GIVER_PHONE,
})

export const setReceiverName = () => ({
  type: SET_RECEIVER_NAME,
})

export const setReceiverPhone = () => ({
  type: SET_RECEIVER_PHONE,
})

export const setAge = () => ({
  type: SET_AGE,
})

export const setPrice = () => ({
  type: SET_PRICE,
})

export const setGender = () => ({
  type: SET_GENDER,
})
*/

export const SET_ORDER = 'SET_ORDER' as const

export type InfoSet = {
  key: string
  value: string
}

export const setOrderInfo = (info: InfoSet) => ({
  type: SET_ORDER,
  payload: info,
})

export type orderInfoAction = ReturnType<typeof setOrderInfo>
