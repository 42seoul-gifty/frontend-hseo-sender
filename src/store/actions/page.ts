export const SET_PAGE = 'SET_PAGE' as const

export const setPageInfo = (page: string) => ({
  type: SET_PAGE,
  payload: page,
})

export type PageInfoAction = ReturnType<typeof setPageInfo>
