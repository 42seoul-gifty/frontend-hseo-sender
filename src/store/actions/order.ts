export const SET_ORDER = 'SET_ORDER' as const
/*
export type SelectionInfo = {
  id: number
  value: string
}
*/
export type InfoSet = {
  key: string
  value: string
}

export const setOrderInfo = (info: InfoSet) => ({
  type: SET_ORDER,
  payload: info,
})

export type orderInfoAction = ReturnType<typeof setOrderInfo>
