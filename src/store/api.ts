import axios from 'axios'
import { BASE_URL } from 'config'

export const requestGetSelection = (url: string) => {
  return axios.get(`${BASE_URL}/${url}`)
}
