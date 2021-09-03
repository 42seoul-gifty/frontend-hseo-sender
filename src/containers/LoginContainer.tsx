import React from 'react'
import { css } from '@emotion/react'
import Modal from 'components/Modal'

const LoginContainer: React.FC = () => {
  return (
    <div css={Container}>
      로그인
      <Modal />
    </div>
  )
}

export default LoginContainer

const Container = css`
  width: 60%;
  margin: 0 auto;
  max-width: 1256px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`
