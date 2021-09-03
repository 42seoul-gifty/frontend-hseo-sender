import React from 'react'
import { css } from '@emotion/react'
import Modal from 'components/Modal'

const GiftContainer: React.FC = () => {
  return (
    <div css={Container}>
      선물하기
      <Modal />
    </div>
  )
}

export default GiftContainer

const Container = css`
  width: 60%;
  margin: 0 auto;
  max-width: 1256px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`
