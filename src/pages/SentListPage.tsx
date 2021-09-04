import React from 'react'
import { css } from '@emotion/react'

const SentListPage: React.FC = () => {
  return <div css={Container}>보낸선물 리스트</div>
}

export default SentListPage

const Container = css`
  width: 60%;
  margin: 0 auto;
  max-width: 1256px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`
