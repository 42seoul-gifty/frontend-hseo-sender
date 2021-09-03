import { KAKAO_AUTH_URL } from 'config'

const LoginView: React.FC = () => {
  const handleKakaoLoginButton = () => {
    window.location.assign(KAKAO_AUTH_URL)
  }
  return (
    <div>
      <h1>login</h1>
      <button onClick={handleKakaoLoginButton}>kakao login</button>
    </div>
  )
}

export default LoginView
