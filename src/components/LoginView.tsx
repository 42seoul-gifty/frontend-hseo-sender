import { css } from '@emotion/react'

import { KAKAO_AUTH_URL, NAVER_AUTH_URL } from 'config'
import { ButtonDefault, FlexColCenter } from 'styles/GlobalStyles'

const LoginView: React.FC = () => {
  const handleKakaoLogin = () => {
    window.location.assign(KAKAO_AUTH_URL)
  }

  const handleNaverLogin = async () => {
    const stateString = Math.random().toString(36).substring(2, 15)
    const url = `${NAVER_AUTH_URL}&state=${stateString}`
    window.location.assign(url)
  }

  return (
    <div css={Container}>
      <button css={ButtonDefault} onClick={handleKakaoLogin}>
        <img
          css={KakaoLoginImg}
          src="assets/kakao_login_large_narrow.png"
          alt="카카오 로그인"
        />
      </button>
      <button onClick={handleNaverLogin}>네이버 로그인</button>
    </div>
  )
}

export default LoginView

const Container = css`
  ${FlexColCenter}
  width: 100vw;
  height: 100vh;
  max-width: 768px;
`
const KakaoLoginImg = css`
  width: 200px;
`
