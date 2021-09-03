import { ModalAction, SHOW_MODAL, HIDE_MODAL } from 'store/actions/modal'

const initialState = {
  show: false,
  title: '',
}

const modalReducer = (state = initialState, action: ModalAction) => {
  switch (action.type) {
    case SHOW_MODAL:
      return { show: true, title: action.payload }
    case HIDE_MODAL:
      return { ...state, show: false }
    default:
      return state
  }
}

export default modalReducer
