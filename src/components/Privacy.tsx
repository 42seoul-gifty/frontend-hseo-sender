import React from 'react'
import { css } from '@emotion/react'
import { FlexColCenter, FONT_SIZE_STYLE } from 'styles/GlobalStyles'

const Privacy: React.FC = () => {
  return (
    <div css={Container}>
      <h1>정보보안규약</h1>
      <p>개인 정보 처리 목적</p>
    </div>
  )
}

export default Privacy

const Container = css`
  ${FlexColCenter}
  width: 100%;
  margin: 0 auto;
  max-width: 768px;
  font-size: ${FONT_SIZE_STYLE.large};
  margin-top: 40px;
`
