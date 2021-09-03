import { Itodo } from 'config'
import { TodoAction, SET_TODOS } from 'store/actions/todos'

type todoState = {
  todos: Itodo[] | undefined
}
const initialState: todoState = {
  todos: undefined,
}

const todoReducer = (state = initialState, action: TodoAction) => {
  switch (action.type) {
    case SET_TODOS:
      return { todos: action.payload }
    default:
      return state
  }
}

export default todoReducer
