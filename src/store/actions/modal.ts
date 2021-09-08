export const SHOW_WARNING_MODAL = 'SHOW_WARNING_MODAL' as const
export const SHOW_AGE_MODAL = 'SHOW_AGE_MODAL' as const
export const SHOW_PRICE_MODAL = 'SHOW_PRICE_MODAL' as const
export const SHOW_MYPAGE_MODAL = 'SHOW_MYPAGE_MODAL' as const
export const SHOW_POLICY_MODAL = 'SHOW_POLICY_MODAL' as const
export const SHOW_PRIVACY_MODAL = 'SHOW_PRIVACY_MODAL' as const
export const HIDE_MODAL = 'HIDE_MODAL' as const

export type ModalType =
  | typeof SHOW_WARNING_MODAL
  | typeof SHOW_AGE_MODAL
  | typeof SHOW_PRICE_MODAL
  | typeof SHOW_MYPAGE_MODAL
  | typeof SHOW_POLICY_MODAL
  | typeof SHOW_PRIVACY_MODAL

export const showModal = (typename: ModalType) => ({
  type: typename,
})

export const hideModal = () => ({
  type: HIDE_MODAL,
})

export type ModalAction =
  | ReturnType<typeof showModal>
  | ReturnType<typeof hideModal>
