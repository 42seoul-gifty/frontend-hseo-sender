export const BASE_URL = 'http://gypark.gifty4u.com'

export interface Iorder {
  [key: string]: string | number | string[]
  giver_name: string
  giver_phone: string
  receiver_name: string
  receiver_phone: string
  gender: string[]
  age: string[]
  price: number
}

export type SelectType = {
  id: number
  value?: string
  amount?: number
  name?: string
}

export type Selects = {
  ages: SelectType[]
  prices: SelectType[]
  gender: SelectType[]
}

type Preference = {
  age: number[]
  gender: number[]
  price: number
}

type Address = {
  post_code: string
  address: string
  address_detail: string
}

type Receiver = {
  id: string
  name: string
  phone: string
  product: string | null
  address: Address
}

export type RecentOrders = {
  id: number
  giver_name: string
  giver_phone: string
  order_date: string
  preference: Preference
  receiver: Receiver
  status: string
}

export const phoneNumberRegex = /^\d{11}$/
//카카오 로그인
export const CLIENT_ID = '223fe55510e1365b4eb39c45cca100b5'
export const REDIRECT_URI = 'http://localhost:3000/callback/kakao'
export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`

//네이버 로그인
export const NAVER_CLIENT_ID = 'mKeM7aEuG66T0SPMnrw2'
export const NAVER_SECRET = 'zN7dGaVF4V'
export const NAVER_REDIRECT_URI = 'http://localhost:3000/callback/naver'
export const NAVER_AUTH_URL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${NAVER_CLIENT_ID}&redirect_uri=${NAVER_REDIRECT_URI}`

//IMP 결제
export const IMP_CODE = 'imp18755444'
export const IMP_KEY = 3781620431090305
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
