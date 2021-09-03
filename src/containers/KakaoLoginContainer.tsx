import React from 'react'
import { css } from '@emotion/react'
import Modal from 'components/Modal'

const KakaoLoginContainer: React.FC = () => {
  return (
    <div css={Container}>
      카카오 redirected
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
