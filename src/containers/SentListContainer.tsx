import React from 'react'
import { css } from '@emotion/react'
import Modal from 'components/Modal'

const SentListContainer: React.FC = () => {
  return (
    <div css={Container}>
      보낸선물 리스트
      <Modal />
    </div>
  )
}

export default SentListContainer

const Container = css`
  width: 60%;
  margin: 0 auto;
  max-width: 1256px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`
