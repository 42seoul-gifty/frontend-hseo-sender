import React, { useState, Dispatch, SetStateAction } from 'react'
import { useHistory } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'
import { css } from '@emotion/react'
import { RootState } from 'store/configureStore'
import { setOrderInfo } from 'store/actions/order'
import { showModal } from 'store/actions/modal'
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
      dispatch(showModal('이름과 전화번호를 입력해주세요'))
      return
    }
    setPageState('gift')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setOrderInfo({ key: e.target.name, value: e.target.value }))
  }

  return (
    <div css={Container}>
      받는 사람 정보
      <form onSubmit={handleSubmit}>
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
        <button type="button" onClick={() => setPageState('sender')}>
          이전으로
        </button>
        <button type="submit">다음단계</button>
      </form>
      <Modal />
    </div>
  )
}

export default ReceiverInfo

const Container = css`
  width: 60%;
  margin: 0 auto;
  max-width: 1256px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`
