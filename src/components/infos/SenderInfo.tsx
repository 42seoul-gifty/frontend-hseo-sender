import React, { useState, Dispatch, SetStateAction, FormEvent } from 'react'
import { useHistory } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'
import { css } from '@emotion/react'
import { RootState } from 'store/configureStore'
import ContactInput from 'components/inputs/ContactInput'
import { setOrderInfo } from 'store/actions/order'
import { showWarningModal } from 'store/actions/modal'
import Modal from 'components/Modal'

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
    setPageState('receiver')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setOrderInfo({ key: e.target.name, value: e.target.value }))
  }

  return (
    <div css={Container}>
      보내는 사람 정보
      <form onSubmit={handleSubmit}>
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

        <button type="button" onClick={() => history.push('/main')}>
          이전으로
        </button>
        <button type="submit">다음단계</button>
      </form>
      <Modal>
        <h1>error</h1>
      </Modal>
    </div>
  )
}

export default SenderInfo

const Container = css`
  width: 60%;
  margin: 0 auto;
  max-width: 1256px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`
