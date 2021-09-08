import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { css } from '@emotion/react'
import { FlexCenter, FlexColCenter } from 'styles/GlobalStyles'
import { RootState } from 'store/configureStore'
import { setOrderInfo } from 'store/actions/order'
import { showWarningModal } from 'store/actions/modal'
import { phoneNumberRegex } from 'config'
import { setPageInfo } from 'store/actions/page'

interface IProps {
  names: string[]
  beforeClick: () => void
  nextPage: string
}

const ContactInput: React.FC<IProps> = ({ names, beforeClick, nextPage }) => {
  const order = useSelector((state: RootState) => state.order)
  const dispatch = useDispatch()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!order[names[0]] || !order[names[1]]) {
      dispatch(showWarningModal())
      return
    }
    if (!order[names[1]].match(phoneNumberRegex)) {
      dispatch(showWarningModal())
      return
    }
    dispatch(setPageInfo(nextPage))
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setOrderInfo({ key: e.target.name, value: e.target.value }))
  }

  return (
    <form css={InputForm} onSubmit={handleSubmit}>
      {names.map((name, index) => (
        <input
          key={index}
          type="text"
          onChange={handleChange}
          value={order[name]}
          name={name}
        />
      ))}
      <section css={BeforeNextButtonSection}>
        <button type="button" onClick={beforeClick}>
          이전으로
        </button>
        <button type="submit">다음단계</button>
      </section>
    </form>
  )
}

export default ContactInput

const InputForm = css`
  ${FlexColCenter}
  margin-top: 40px;
`
const BeforeNextButtonSection = css`
  ${FlexCenter}
  margin-top: 30px;
`
