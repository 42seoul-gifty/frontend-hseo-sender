import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { css } from '@emotion/react'
import { FONT_SIZE_STYLE, FlexCenter, FlexColCenter } from 'styles/GlobalStyles'
import { RootState } from 'store/configureStore'
import {
  showModal,
  SHOW_AGE_MODAL,
  SHOW_PRICE_MODAL,
  SHOW_WARNING_MODAL,
} from 'store/actions/modal'
import { setPageInfo } from 'store/actions/page'
import Modal from 'components/Modal'
import Select from 'components/inputs/Select'
import { ageSelections, genderSelections, priceSelections } from 'config'
import { BASE_URL } from 'config'
import axios, { AxiosResponse } from 'axios'

export type SelectType = {
  id: number
  value: string
}

export type Selects = {
  ages: SelectType[]
  prices: SelectType[]
}

const GiftInfo: React.FC = () => {
  const order = useSelector((state: RootState) => state.order)
  const modal = useSelector((state: RootState) => state.modal)
  const dispatch = useDispatch()

  const initialSelects: Selects = { ages: [], prices: [] }
  const [selectionIndex, setSelectionIndex] = useState(initialSelects)

  const handleNext = () => {
    if (!order.age || !order.price) {
      dispatch(showModal(SHOW_WARNING_MODAL))
      return
    }
    dispatch(setPageInfo('overall'))
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
      <div>선물 정보를 알려주세요</div>
      <div>성별, 나이, 금액대를 입력해주세요</div>

      <section css={SelectionSection}>
        <Select keyword="gender" selections={genderSelections} />
        <button onClick={() => dispatch(showModal(SHOW_AGE_MODAL))}>
          {order.age ? order.age : '연령'}
        </button>
        <button onClick={() => dispatch(showModal(SHOW_PRICE_MODAL))}>
          {order.price ? order.price : '가격'}
        </button>
      </section>

      <section css={BeforeNextButtonSection}>
        <button type="button" onClick={() => dispatch(setPageInfo('receiver'))}>
          이전으로
        </button>
        <button type="button" onClick={handleNext}>
          다음단계
        </button>
      </section>

      <Modal>{modalType()}</Modal>
    </div>
  )
}

export default GiftInfo

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
const SelectionSection = css`
  ${FlexColCenter}
  margin-top: 40px;
`
const BeforeNextButtonSection = css`
  ${FlexCenter}
  margin-top: 30px;
`
