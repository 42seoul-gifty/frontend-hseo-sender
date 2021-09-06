import { css } from '@emotion/react'
import emotionReset from 'emotion-reset'

export const BOX_STYLE = {
  shadow: '0 5px 5px rgb(163, 169, 193, 0.2);',
  shadowDarker: '2px 5px 5px rgb(27, 30, 35, 0.2);',
}

export const COLOR_STYLE = {
  primary: '#0078d7',
  grey: '#E1E1F3',
  greyLighter: '#eee',
  greyDarker: '#c4c4dd',
  greyDarkest: '#444',
  white: '#FBFBFB',
  red: '#e91e63',
  blue: '#1e84eb',
  green: '#5cb484',
  yellow: '#ffcc00',
}

export const FONT_SIZE_STYLE = {
  smaller: '0.75rem',
  small: '0.85rem',
  mediumSmall: '0.925rem',
  medium: '1rem',
  large: '1.25rem',
  larger: '1.375rem',
  largest: '1.8rem',
  huge: '3rem',
  gigantic: '3.75rem',
}

export const FlexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const FlexColCenter = css`
  ${FlexCenter}
  flex-direction: column;
  justify-content: center;
`

export const ButtonDefault = css`
  border: none;
  background-color: inherit;
  cursor: pointer;
`

export const MainBtn = css`
  ${ButtonDefault}
  font-size: ${FONT_SIZE_STYLE.smaller};
  background-color: ${COLOR_STYLE.greyLighter};
  padding: 0.5rem 0.8rem;
  margin-right: 5px;
  border-radius: 2px;
  color: ${COLOR_STYLE.greyDarkest};
  transition: all 0.3s;
  &:hover {
    transform: translateY(-2px);
  }
`

export const MainSelectedBtn = css`
  ${MainBtn}
  background-color: ${COLOR_STYLE.primary};
  color: ${COLOR_STYLE.white};
  transition: all 0.3s;
`

export const GlobalStyles = css`
  ${emotionReset}
  *, *::after, *::before {
    box-sizing: border-box;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }
  body {
    background-color: ${COLOR_STYLE.white};
    font-size: 62.5%; // 1rem = 10px
    font-family: sans-serif;
    height: 100vh;
    width: 100vw;
  }
  #root {
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @font-face {
    font-family: Arista Pro Alternate Regular;
    src: url('/assets/font/Arista-Pro-Alternate-Regular-trial.ttf');
  }
`
