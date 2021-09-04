import React, { useState, Dispatch, SetStateAction } from 'react'
import { useHistory } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'
import { css } from '@emotion/react'
import { RootState } from 'store/configureStore'
import {
  showAgeModal,
  showWarningModal,
  showPriceModal,
} from 'store/actions/modal'
import { setOrderInfo } from 'store/actions/order'
import Modal from 'components/Modal'

interface IProps {
  pageState: string
  setPageState: Dispatch<SetStateAction<string>>
}

const GiftInfo: React.FC<IProps> = ({ pageState, setPageState }) => {
  const order = useSelector((state: RootState) => state.order)
  const modal = useSelector((state: RootState) => state.modal)
  const dispatch = useDispatch()

  console.log(order)
  const handleNext = () => {
    if (!order.age || !order.price) {
      dispatch(showWarningModal())
      return
    }
    setPageState('overall')
  }

  const handleGenderButton = (gender: string) => {
    dispatch(setOrderInfo({ key: 'gender', value: gender }))
  }

  const modalType = () => {
    if (modal.showAgeModal) return <h1>age</h1>
    if (modal.showPriceModal) return <h1>price</h1>
    if (modal.showWarningModal) return <h1>error</h1>
  }

  return (
    <div css={Container}>
      선물 정보
      <button type="button" onClick={() => handleGenderButton('male')}>
        남성
      </button>
      <button type="button" onClick={() => handleGenderButton('female')}>
        여성
      </button>
      <button onClick={() => dispatch(showAgeModal())}>연령</button>
      <button onClick={() => dispatch(showPriceModal())}>가격</button>
      <button type="button" onClick={() => setPageState('receiver')}>
        이전으로
      </button>
      <button type="button" onClick={handleNext}>
        다음단계
      </button>
      <Modal>{modalType()}</Modal>
    </div>
  )
}

export default GiftInfo

const Container = css`
  width: 60%;
  margin: 0 auto;
  max-width: 1256px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`
