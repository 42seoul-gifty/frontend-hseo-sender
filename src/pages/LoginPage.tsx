import React from 'react'
import { css } from '@emotion/react'
import LoginView from 'components/LoginView'

const LoginPage: React.FC = () => {
  return (
    <div css={Container}>
      <LoginView />
    </div>
  )
}

export default LoginPage

const Container = css`
  width: 60%;
  margin: 0 auto;
  max-width: 1256px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`
