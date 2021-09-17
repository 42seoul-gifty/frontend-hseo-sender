export const BASE_URL = 'https://hokim.gifty4u.com'

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

//카카오 로그인
export const CLIENT_ID = '77db1d1cdef95abccc65acb9551aa2ca'
export const REDIRECT_URI = 'http://localhost:3000/callback/kakao'
export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`

export type SelectType = {
  id: number
  value: string
  amount?: number
}

export type Selects = {
  ages: SelectType[]
  prices: SelectType[]
}

export const ageSelections: SelectType[] = [
  { id: 1, value: '10' },
  { id: 2, value: '20' },
  { id: 3, value: '30' },
  { id: 4, value: '40' },
]

export const priceSelections: SelectType[] = [
  { id: 2, value: '1만5천원', amount: 15000 },
  { id: 3, value: '2만5천원', amount: 25000 },
  { id: 4, value: '3만5천원', amount: 35000 },
  { id: 5, value: '4만5천원', amount: 45000 },
]

export const genderSelections: SelectType[] = [
  { id: 1, value: '여성' },
  { id: 2, value: '남성' },
  { id: 3, value: '무관' },
]

export const phoneNumberRegex = /^\d{11}$/

//IMP 결제
export const IMP_CODE = 'imp71394683'
export const IMP_KEY = 4674594066918237
export const IMP_SECRET =
  'GD8sR5tjJeJedchRQg0GtotbwOa0u3obHwEyC7SllBAzNSrE9rlDPOOmCYm71LiJiXiU4agqMR0AJreT'

/* hokim
KAKAO_REST_KEY=77db1d1cdef95abccc65acb9551aa2ca
KAKAO_SECRET=SCKaF00YOhAslt61IrvuEyFOXnpoMhM7
JavaScript 키dc3f292c57aba867fd4c53fc230d5f79

NAVER_CLIENT_ID=mLmvFPPs5yoVqqmxbBxI
NAVER_SECRET=S21s7NttLS
*/

/* gypark
kakao
네이티브 앱 키	cd12e3a568f69bd5b41c28a324bb9911
REST API 키	223fe55510e1365b4eb39c45cca100b5
JavaScript 키	2f89bf1f614893436b8174d4d3d7a30c
Admin 키	5acd776a90b977aec1eaf99ad396ca81

naver
client id: mKeM7aEuG66T0SPMnrw2
client secret: zN7dGaVF4V
*/

/* yekim
KAKAO_REST_KEY=1ba26f09773c4e4473835dabe091a18a
KAKAO_SECRET=somYpHUEAMXKtci5Me62JOUvgzHKroCz
*/
