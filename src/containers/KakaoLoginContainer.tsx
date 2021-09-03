import React from 'react'
import { css } from '@emotion/react'
import Modal from 'components/Modal'

const KakaoLoginContainer: React.FC = () => {
  const code = new URL(window.location.href).searchParams.get('code')

  return (
    <div css={Container}>
      <h1>카카오 redirected {code}</h1>
      <Modal />
    </div>
  )
}

export default KakaoLoginContainer

const Container = css`
  width: 60%;
  margin: 0 auto;
  max-width: 1256px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`
