import { css } from '@emotion/react'
import { KAKAO_AUTH_URL } from 'config'
import { ButtonDefault, FlexColCenter } from 'styles/GlobalStyles'

const LoginView: React.FC = () => {
  const handleKakaoLoginButton = () => {
    window.location.assign(KAKAO_AUTH_URL)
  }
  return (
    <div css={Container}>
      <button css={ButtonDefault} onClick={handleKakaoLoginButton}>
        <img
          css={KakaoLoginImg}
          src="assets/kakao_login_large_narrow.png"
          alt="카카오 로그인"
        />
      </button>
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
