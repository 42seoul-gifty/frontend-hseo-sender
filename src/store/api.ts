import axios from 'axios'
import { BASE_URL, SORT_OPTION } from 'config'
import { toggleObject } from './actions/todos'

export const requestGetTodos = () => {
  return axios.request({
    method: 'get',
    url: `${BASE_URL}/todo?_sort=${SORT_OPTION}`,
  })
}

export const requestPostTodo = (text: string) => {
  return axios.request({
    method: 'post',
    url: `${BASE_URL}/todo`,
    data: {
      content: text,
      isChecked: false,
      createdAt: new Date(),
    },
  })
}

export const requestPatchTodo = (object: toggleObject) => {
  return axios.request({
    method: 'patch',
    url: `${BASE_URL}/todo/${object.id}`,
    data: {
      isChecked: object.isChecked,
    },
  })
}

export const requestDeletTodo = (id: string) => {
  return axios.request({
    method: 'delete',
    url: `${BASE_URL}/todo/${id}`,
  })
}
