import { Iorder } from 'config'
import { TodoAction, SET_ORDERS } from 'store/actions/orders'

type orderstate = {
  orders: Iorder[] | undefined
}
const initialState: orderstate = {
  orders: undefined,
}

const todoReducer = (state = initialState, action: TodoAction) => {
  switch (action.type) {
    case SET_ORDERS:
      return { orders: action.payload }
    default:
      return state
  }
}

export default todoReducer
