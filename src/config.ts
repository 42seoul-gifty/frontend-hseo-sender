export const BASE_URL = 'https://gifty-mockserver.herokuapp.com/'

export const SORT_OPTION = 'createdAt&_order=DESC'

export interface Iorder {
  id: number
  giver_name: string
  giver_phone: string
  receiver_name: string
  receiver_phone: string
  gender: string
  age: string
  price: string
}

export interface IProps {
  orders: Iorder[] | undefined
}

export const CLIENT_ID = '4bc54b0ac02e0bb38661b9a568a0f205'
export const REDIRECT_URI = 'http://1d2c-211-114-223-60.ngrok.io/login/kakao'
export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`
