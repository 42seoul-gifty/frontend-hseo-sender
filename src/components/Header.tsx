import { css } from '@emotion/react'
import { FlexColCenter, FONT_SIZE_STYLE } from 'styles/GlobalStyles'

const Header: React.FC = () => {
  return (
    <header css={Container}>
      <h1 css={HeaderTitle}>Gifty</h1>
    </header>
  )
}

export default Header

const Container = css`
  display: flex;
  flex-direction: center;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 100%;
`

const HeaderTitle = css`
  font-family: Arista Pro Alternate Regular;
  font-size: 35px;
  font-style: normal;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: -0.01em;
  text-align: center;
  height: 30px;
  color: #4a847a;
  padding-top: 5%;
  padding-bottom: 5%;
`
