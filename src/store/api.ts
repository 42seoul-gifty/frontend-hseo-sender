import axios from 'axios'
import { BASE_URL, SORT_OPTION } from 'config'
import { newOrder, toggleObject } from './actions/orders'

export const requestGetOrders = () => {
  return axios.request({
    method: 'get',
    url: `${BASE_URL}/orders`,
  })
}

export const requestPostOrder = (object: newOrder) => {
  return axios.request({
    method: 'post',
    url: `${BASE_URL}/orders`,
    data: {
      ...object,
    },
  })
}

export const requestPatchOrder = (object: toggleObject) => {
  return axios.request({
    method: 'patch',
    url: `${BASE_URL}/orders/${object.id}`,
    data: {
      isChecked: object.isChecked,
    },
  })
}

export const requestDeleteOrder = (id: string) => {
  return axios.request({
    method: 'delete',
    url: `${BASE_URL}/orders/${id}`,
  })
}
