import { PageInfoAction, SET_PAGE } from 'store/actions/page'

const initialState: string = 'sender'

const pageReducer = (state = initialState, action: PageInfoAction) => {
  switch (action.type) {
    case SET_PAGE:
      return action.payload
    default:
      return state
  }
}

export default pageReducer
