import React from 'react'
import { css } from '@emotion/react'
import { FlexColCenter, FONT_SIZE_STYLE } from 'styles/GlobalStyles'

const Policy: React.FC = () => {
  return (
    <div css={Container}>
      <h1>이용약관</h1>
      <p>총칙 목적 ㅇㅇㅇㅇㅇ</p>
    </div>
  )
}

export default Policy

const Container = css`
  ${FlexColCenter}
  width: 100%;
  margin: 0 auto;
  max-width: 768px;
  font-size: ${FONT_SIZE_STYLE.large};
  margin-top: 40px;
`
