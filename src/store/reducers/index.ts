import {
  SetIndexAction,
  SET_AGE_INDEX,
  SET_PRICE_INDEX,
} from 'store/actions/index'

type Index = {
  ageIndex: number
  priceIndex: number
}

const initialState: Index = { ageIndex: -1, priceIndex: -1 }

const indexReducer = (state = initialState, action: SetIndexAction) => {
  switch (action.type) {
    case SET_AGE_INDEX:
      return { ...state, ageIndex: action.payload }
    case SET_PRICE_INDEX:
      return { ...state, priceIndex: action.payload }
    default:
      return state
  }
}

export default indexReducer
