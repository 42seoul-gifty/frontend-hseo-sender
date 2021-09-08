import axios from 'axios'

const api = axios.create({
  baseURL: 'https://hokim.gifty4u.com',
  withCredentials: true,
})

export default api
