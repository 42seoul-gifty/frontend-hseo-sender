export const SHOW_MODAL = 'SHOW_MODAL' as const
export const HIDE_MODAL = 'HIDE_MODAL' as const

export const showModal = (text: string) => ({
  type: SHOW_MODAL,
  payload: text,
})

export const hideModal = () => ({
  type: HIDE_MODAL,
})

export type ModalAction =
  | ReturnType<typeof showModal>
  | ReturnType<typeof hideModal>
