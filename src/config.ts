//import { SelectionInfo } from 'store/actions/order'

import { SelectType } from 'components/infos/GiftInfo'

export const BASE_URL = 'http://hokim.gifty4u.com'
//export const BASE_URL = 'https://gifty-mockserver.herokuapp.com'

export const SORT_OPTION = 'createdAt&_order=DESC'

export interface Iorder {
  [key: string]: string
  giver_name: string
  giver_phone: string
  receiver_name: string
  receiver_phone: string
  gender: string
  age: string
  price: string
}

export const GENDER_CATEGORY_INDEX = 1
export const PRICE_CATEGORY_INDEX = 1
export const AGE_CATEGORY_INDEX = 1

export const CLIENT_ID = '77db1d1cdef95abccc65acb9551aa2ca'
export const REDIRECT_URI = 'http://localhost:3000/callback/kakao'
export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`

export const ageSelections: SelectType[] = [
  { id: 1, value: '10' },
  { id: 2, value: '20' },
  { id: 3, value: '30' },
  { id: 4, value: '40' },
]

export const priceSelections: SelectType[] = [
  { id: 1, value: '1만5천원' },
  { id: 2, value: '2만5천원' },
  { id: 3, value: '3만5천원' },
  { id: 4, value: '4만5천원' },
]

export const genderSelections: SelectType[] = [
  { id: 1, value: '남성' },
  { id: 2, value: '여성' },
  { id: 3, value: '전체' },
]

export const phoneNumberRegex = /^\d{11}$/

/*
KAKAO_REST_KEY=77db1d1cdef95abccc65acb9551aa2ca
KAKAO_SECRET=SCKaF00YOhAslt61IrvuEyFOXnpoMhM7
JavaScript 키dc3f292c57aba867fd4c53fc230d5f79
*/
