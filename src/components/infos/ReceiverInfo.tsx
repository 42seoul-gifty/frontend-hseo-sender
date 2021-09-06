import React, { Dispatch, SetStateAction } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { css } from '@emotion/react'
import { FONT_SIZE_STYLE, FlexColCenter, FlexCenter } from 'styles/GlobalStyles'
import { phoneNumberRegex } from 'config'
import { RootState } from 'store/configureStore'
import { setOrderInfo } from 'store/actions/order'
import { showWarningModal } from 'store/actions/modal'
import Modal from 'components/Modal'

interface IProps {
  pageState: string
  setPageState: Dispatch<SetStateAction<string>>
}

const ReceiverInfo: React.FC<IProps> = ({ pageState, setPageState }) => {
  const order = useSelector((state: RootState) => state.order)
  const dispatch = useDispatch()

  console.log(order)
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!order.receiver_name || !order.receiver_phone) {
      dispatch(showWarningModal())
      return
    }
    if (!order.receiver_phone.match(phoneNumberRegex)) {
      dispatch(showWarningModal())
      return
    }
    setPageState('gift')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setOrderInfo({ key: e.target.name, value: e.target.value }))
  }

  return (
    <div css={Container}>
      <div>받는 분의 정보를 알려주세요</div>
      <div>이름과 연락처를 확인해 주세요</div>
      <form css={InputForm} onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleChange}
          value={order.receiver_name}
          name="receiver_name"
        />
        <input
          type="text"
          onChange={handleChange}
          value={order.receiver_phone}
          name="receiver_phone"
        />
        <div css={BeforeNextButtonDiv}>
          <button type="button" onClick={() => setPageState('sender')}>
            이전으로
          </button>
          <button type="submit">다음단계</button>
        </div>
      </form>
      <Modal>
        <h1>error</h1>
      </Modal>
    </div>
  )
}

export default ReceiverInfo

const Container = css`
  width: 100%;
  margin: 0 auto;
  max-width: 768px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  font-size: ${FONT_SIZE_STYLE.large};
  margin-top: 40px;
`
const InputForm = css`
  ${FlexColCenter}
  margin-top: 40px;
`
const BeforeNextButtonDiv = css`
  ${FlexCenter}
  margin-top: 30px;
`
