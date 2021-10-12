import React from 'react'
import { css } from '@emotion/react'
import { FlexColCenter, FONT_SIZE_STYLE } from 'styles/GlobalStyles'

const Warning: React.FC = () => {
  return (
    <div css={Container}>
      <h1>Warning</h1>
      <p>값을 입력해주세요</p>
    </div>
  )
}

export default Warning

const Container = css`
  ${FlexColCenter}
  width: 100%;
  margin: 0 auto;
  max-width: 768px;
  font-size: ${FONT_SIZE_STYLE.large};
  margin-top: 40px;
`
