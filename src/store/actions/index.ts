export const SET_AGE_INDEX = 'SET_AGE_INDEX' as const
export const SET_PRICE_INDEX = 'SET_PRICE_INDEX' as const
export const SET_GENDER_INDEX = 'SET_GENDER_INDEX' as const

export const setGenderIndex = (idx: number) => ({
  type: SET_GENDER_INDEX,
  payload: idx,
})

export const setAgeIndex = (idx: number) => ({
  type: SET_AGE_INDEX,
  payload: idx,
})

export const setPriceIndex = (idx: number) => ({
  type: SET_PRICE_INDEX,
  payload: idx,
})

export type SetIndexAction =
  | ReturnType<typeof setAgeIndex>
  | ReturnType<typeof setPriceIndex>
  | ReturnType<typeof setGenderIndex>
