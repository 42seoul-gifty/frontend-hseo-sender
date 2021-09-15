import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { css } from '@emotion/react'
import { setOrderInfo } from 'store/actions/order'
import { COLOR_STYLE, FlexCenter, FONT_SIZE_STYLE } from 'styles/GlobalStyles'
import { SelectType } from 'config'
import { RootState } from 'store/configureStore'

interface IProps {
  keyword: string
  selections: SelectType[]
}

const Select: React.FC<IProps> = ({ keyword, selections }) => {
  const dispatch = useDispatch()
  const order = useSelector((state: RootState) => state.order)
  const [clicked, setClicked] = useState<string>(order[keyword])

  const handleClick = (value: string) => {
    setClicked(value)
    dispatch(setOrderInfo({ key: keyword, value: value }))
  }
  /*
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setOrderInfo({ key: keyword, value: e.target.value }))
  }
  */
  return (
    <div css={Container}>
      {selections.map((option) => (
        <button
          key={option.id}
          css={option.value === clicked ? ButtonSelected : Button}
          onClick={() => handleClick(option.value)}
        >
          {option.value}
        </button>
      ))}

      {/*
      <select value={order[keyword]} onChange={handleChange}>
        {selections.map((option) => (
          <option value={option.value}>{option.value}</option>
        ))}
      </select>
        */}
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
