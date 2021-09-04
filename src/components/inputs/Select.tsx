import React from 'react'
import { useDispatch } from 'react-redux'
import { css } from '@emotion/react'
import { hideModal } from 'store/actions/modal'
import { setOrderInfo } from 'store/actions/order'
import { FlexCenter, FONT_SIZE_STYLE } from 'styles/GlobalStyles'

interface IProps {
  keyword: string
  selections: string[]
}

const Select: React.FC<IProps> = ({ keyword, selections }) => {
  const dispatch = useDispatch()

  return (
    <div css={Container}>
      {selections.map((option) => (
        <div>
          <button
            onClick={() =>
              dispatch(setOrderInfo({ key: keyword, value: option }))
            }
          >
            {option}
          </button>
        </div>
      ))}
      {keyword !== 'gender' && (
        <button onClick={() => dispatch(hideModal())}>선택 완료</button>
      )}
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
