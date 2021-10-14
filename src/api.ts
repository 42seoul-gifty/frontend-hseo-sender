import axios from 'axios'

const api = axios.create({
  baseURL: 'http://gypark.gifty4u.com',
})

export default api
