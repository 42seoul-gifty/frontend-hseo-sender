export const BASE_URL = 'https://gifty-mockserver.herokuapp.com'

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

export const CLIENT_ID = 'e4c6fc1232c62e4be504c0db75b0f33f'
export const REDIRECT_URI = 'http://localhost:3000/callback'
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
