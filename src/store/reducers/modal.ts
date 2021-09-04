import {
  ModalAction,
  SHOW_WARNING_MODAL,
  SHOW_AGE_MODAL,
  SHOW_PRICE_MODAL,
  SHOW_MYPAGE_MODAL,
  HIDE_MODAL,
} from 'store/actions/modal'

const initialState = {
  showWarningModal: false,
  showAgeModal: false,
  showPriceModal: false,
  showMyPageModal: false,
}

const modalReducer = (state = initialState, action: ModalAction) => {
  switch (action.type) {
    case SHOW_WARNING_MODAL:
      return { ...state, showWarningModal: true }
    case SHOW_AGE_MODAL:
      return { ...state, showAgeModal: true }
    case SHOW_PRICE_MODAL:
      return { ...state, showPriceModal: true }
    case SHOW_MYPAGE_MODAL:
      return { ...state, showMyPageModal: true }
    case HIDE_MODAL:
      return {
        showWarningModal: false,
        showMyPageModal: false,
        showAgeModal: false,
        showPriceModal: false,
      }
    default:
      return state
  }
}

export default modalReducer
