import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { css } from '@emotion/react'
import { setOrderInfo } from 'store/actions/order'
import { COLOR_STYLE, FlexCenter, FONT_SIZE_STYLE } from 'styles/GlobalStyles'
import { SelectType } from 'config'

interface IProps {
  keyword: string
  selections: SelectType[]
}

const Select: React.FC<IProps> = ({ keyword, selections }) => {
  const dispatch = useDispatch()
  const [clicked, setClicked] = useState<number[]>([])

  const handleClick = (id: number) => {
    setClicked([id])
    dispatch(setOrderInfo({ key: keyword, value: id }))
  }

  return (
    <div css={Container}>
      {selections.map((option) => (
        <button
          key={option.id}
          css={clicked.includes(option.id) ? ButtonSelected : Button}
          onClick={() => handleClick(option.id)}
        >
          {option.value}
        </button>
      ))}
    </div>
  )
}

export default Select

const Container = css`
  ${FlexCenter}
  width: 100%;
  margin: 0 auto;
  max-width: 768px;
  font-size: ${FONT_SIZE_STYLE.large};
  margin-top: 40px;
`
const ButtonSelected = css`
  background-color: ${COLOR_STYLE.greyDarkest};
`

const Button = css`
  background-color: ${COLOR_STYLE.greyLighter};
`
