import React, { Dispatch, SetStateAction } from 'react'
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
import Select from 'components/inputs/Select'
import { ageSelections, genderSelections, priceSelections } from 'config'

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
    if (modal.showAgeModal)
      return <Select keyword="age" selections={ageSelections} />
    if (modal.showPriceModal)
      return <Select keyword="price" selections={priceSelections} />
    if (modal.showWarningModal) return <h1>error</h1>
  }

  return (
    <div css={Container}>
      선물 정보
      <Select keyword="gender" selections={genderSelections} />
      <button onClick={() => dispatch(showAgeModal())}>
        {order.age ? order.age : '연령'}
      </button>
      <button onClick={() => dispatch(showPriceModal())}>
        {order.price ? order.price : '가격'}
      </button>
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
