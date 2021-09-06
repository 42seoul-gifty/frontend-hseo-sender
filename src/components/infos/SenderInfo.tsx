import React, { Dispatch, SetStateAction } from 'react'
import { useHistory } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'
import { css } from '@emotion/react'
import { FlexCenter, FlexColCenter, FONT_SIZE_STYLE } from 'styles/GlobalStyles'
import { RootState } from 'store/configureStore'
import { setOrderInfo } from 'store/actions/order'
import { showWarningModal } from 'store/actions/modal'
import Modal from 'components/Modal'
import { phoneNumberRegex } from 'config'

interface IProps {
  pageState: string
  setPageState: Dispatch<SetStateAction<string>>
}

const SenderInfo: React.FC<IProps> = ({ pageState, setPageState }) => {
  const history = useHistory()
  const order = useSelector((state: RootState) => state.order)
  const dispatch = useDispatch()

  console.log(order)
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!order.giver_name || !order.giver_phone) {
      dispatch(showWarningModal())
      return
    }
    if (!order.giver_phone.match(phoneNumberRegex)) {
      dispatch(showWarningModal())
      return
    }
    setPageState('receiver')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setOrderInfo({ key: e.target.name, value: e.target.value }))
  }

  return (
    <div css={Container}>
      <div>보내는 분의 정보를 알려주세요</div>
      <div>이름과 연락처를 확인해 주세요</div>
      <form css={InputForm} onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleChange}
          value={order.giver_name}
          name="giver_name"
        />
        <input
          type="text"
          onChange={handleChange}
          value={order.giver_phone}
          name="giver_phone"
        />
        <section css={BeforeNextButtonSection}>
          <button type="button" onClick={() => history.push('/main')}>
            이전으로
          </button>
          <button type="submit">다음단계</button>
        </section>
      </form>
      <Modal>
        <h1>error</h1>
      </Modal>
    </div>
  )
}

export default SenderInfo

const Container = css`
  width: 100%;
  height: 100%;
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
const BeforeNextButtonSection = css`
  ${FlexCenter}
  margin-top: 30px;
`
