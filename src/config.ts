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

export const CLIENT_ID = 'e4c6fc1232c62e4be504c0db75b0f33f'
export const REDIRECT_URI = 'https://gifty-hseo.netlify.app/login/kakao'
export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`
