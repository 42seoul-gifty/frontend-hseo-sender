import React, { Dispatch, SetStateAction } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { css } from '@emotion/react'
import { FONT_SIZE_STYLE, FlexCenter, FlexColCenter } from 'styles/GlobalStyles'
import { RootState } from 'store/configureStore'
import {
  showAgeModal,
  showWarningModal,
  showPriceModal,
} from 'store/actions/modal'
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

  const handleNext = () => {
    if (!order.age || !order.price) {
      dispatch(showWarningModal())
      return
    }
    setPageState('overall')
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
        <button onClick={() => dispatch(showAgeModal())}>
          {order.age ? order.age : '연령'}
        </button>
        <button onClick={() => dispatch(showPriceModal())}>
          {order.price ? order.price : '가격'}
        </button>
      </section>

      <section css={BeforeNextButtonSection}>
        <button type="button" onClick={() => setPageState('receiver')}>
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
