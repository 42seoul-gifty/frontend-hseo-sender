import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { css } from '@emotion/react'
import { hideModal } from 'store/actions/modal'
import { setOrderInfo } from 'store/actions/order'
import { COLOR_STYLE, FlexCenter, FONT_SIZE_STYLE } from 'styles/GlobalStyles'
import { SelectType } from 'components/infos/GiftInfo'

interface IProps {
  keyword: string
  selections: SelectType[]
}

const Select: React.FC<IProps> = ({ keyword, selections }) => {
  const dispatch = useDispatch()
  const [clicked, setClicked] = useState<number>(0)

  const handleClick = (value: string, index: number) => {
    setClicked(index)
    dispatch(setOrderInfo({ key: keyword, value: value }))
  }

  return (
    <div css={Container}>
      {selections.map((option) => (
        <button
          key={option.id}
          css={option.id === clicked ? ButtonSelected : Button}
          onClick={() => handleClick(option.value, option.id)}
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
