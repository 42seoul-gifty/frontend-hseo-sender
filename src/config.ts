export const BASE_URL = 'http://hokim.gifty4u.com/'

export const SORT_OPTION = 'createdAt&_order=DESC'

export interface Iorder {
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
export const REDIRECT_URI = 'https://gifty-hseo.netlify.app/callback/kakao'
export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`

export const ageSelections = [
  '20~24세',
  '25~29세',
  '30~34세',
  '35~39세',
  '40~44세',
  '45세 이상',
]

export const priceSelections = [
  '1만5천원',
  '2만원',
  '2만5천원',
  '3만원',
  '3만5천원',
  '4만원',
  '4만5천원',
  '5만원',
]

export const genderSelections = ['남성', '여성']

export const phoneNumberRegex = /^\d{11}$/

/*
KAKAO_REST_KEY=77db1d1cdef95abccc65acb9551aa2ca
KAKAO_SECRET=SCKaF00YOhAslt61IrvuEyFOXnpoMhM7
JavaScript 키dc3f292c57aba867fd4c53fc230d5f79
*/
