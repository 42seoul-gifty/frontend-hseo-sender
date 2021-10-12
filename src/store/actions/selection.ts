import { SelectType } from 'config'

export const GET_SELECTION = 'GET_SELECTION' as const
export const SET_SELECTION = 'SET_SELECTION' as const

export type SelectionInfo = {
  selection: SelectType[]
  type: string
}

export const getSelection = (url: string) => ({
  type: GET_SELECTION,
  payload: url,
})

export const setSelection = (selections: SelectionInfo) => ({
  type: SET_SELECTION,
  payload: selections,
})

export type SelectionAction =
  | ReturnType<typeof getSelection>
  | ReturnType<typeof setSelection>
