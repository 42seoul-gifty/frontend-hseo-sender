import { Iorder } from 'config'
import { orderInfoAction, SET_ORDER } from 'store/actions/order'
/*
const initialSelection: SelectionInfo = {
  id: 0,
  value: '',
}
*/
const initialState: Iorder = {
  giver_name: '',
  giver_phone: '',
  receiver_name: '',
  receiver_phone: '',
  gender: 0,
  age: 0,
  price: 0,
}

const orderReducer = (state = initialState, action: orderInfoAction) => {
  switch (action.type) {
    case SET_ORDER:
      return { ...state, [action.payload.key]: action.payload.value }
    default:
      return state
  }
}

export default orderReducer
