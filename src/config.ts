export const BASE_URL = 'https://paywork-todos.herokuapp.com'

export const SORT_OPTION = 'createdAt&_order=DESC'

export interface Itodo {
  id: string
  content: string
  isChecked: boolean
  createdAt: Date
}

export interface IProps {
  todos: Itodo[] | undefined
}
