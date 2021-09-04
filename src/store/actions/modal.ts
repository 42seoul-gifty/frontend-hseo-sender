export const SHOW_WARNING_MODAL = 'SHOW_WARNING_MODAL' as const
export const SHOW_AGE_MODAL = 'SHOW_AGE_MODAL' as const
export const SHOW_PRICE_MODAL = 'SHOW_PRICE_MODAL' as const
export const SHOW_MYPAGE_MODAL = 'SHOW_MYPAGE_MODAL' as const
export const HIDE_MODAL = 'HIDE_MODAL' as const

export const showWarningModal = () => ({
  type: SHOW_WARNING_MODAL,
})

export const showAgeModal = () => ({
  type: SHOW_AGE_MODAL,
})

export const showPriceModal = () => ({
  type: SHOW_PRICE_MODAL,
})

export const showMyPageModal = () => ({
  type: SHOW_MYPAGE_MODAL,
})

export const hideModal = () => ({
  type: HIDE_MODAL,
})

export type ModalAction =
  | ReturnType<typeof showWarningModal>
  | ReturnType<typeof showAgeModal>
  | ReturnType<typeof showPriceModal>
  | ReturnType<typeof showMyPageModal>
  | ReturnType<typeof hideModal>
