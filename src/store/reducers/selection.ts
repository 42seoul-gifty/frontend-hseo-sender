import { SelectType } from 'config'
import { SelectionAction, SET_SELECTION } from 'store/actions/selection'

type SelectionState = {
  ages: SelectType[] | undefined
  genders: SelectType[] | undefined
  prices: SelectType[] | undefined
}

const initialState: SelectionState = {
  ages: undefined,
  genders: undefined,
  prices: undefined,
}

const selectionReducer = (state = initialState, action: SelectionAction) => {
  switch (action.type) {
    case SET_SELECTION:
      return { ...state, [action.payload.type]: action.payload.selection }
    default:
      return state
  }
}

export default selectionReducer
