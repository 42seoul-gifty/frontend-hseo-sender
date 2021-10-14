import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { css } from '@emotion/react'
import { FlexCenter, FlexColCenter, FONT_SIZE_STYLE } from 'styles/GlobalStyles'
import { setPageInfo } from 'store/actions/page'
import { RootState } from 'store/configureStore'
import Payment from 'components/Payment'

export type PaymentData = {
  success: boolean
  merchant_uid: string
  error_msg: string
  imp_uid: string | null
  error_code: string
}

const OverallInfo: React.FC = () => {
  const order = useSelector((state: RootState) => state.order)
  const dispatch = useDispatch()

  const handleGiftlistButton = () => {
    dispatch(setPageInfo('product'))
  }

  return (
    <div css={Container}>
      선물 정보 확인
      <section css={OverallInfoSection}>
        <h1>{order.receiver_name}</h1>
        <div>
          <span>연락처</span>
          <span>{order.receiver_phone}</span>
        </div>
        <div>
          <span>성별</span>
          <span>{order.gender}</span>
        </div>
        <div>
          <span>나이</span>
          <span>{order.age}</span>
        </div>
        <div>
          <span>예산</span>
          <span>{order.price}</span>
        </div>
      </section>
      <button onClick={handleGiftlistButton}>발송 선물 확인하기</button>
      <section css={BeforeNextButtonSection}>
        <button onClick={() => dispatch(setPageInfo('gift'))}>이전으로</button>
        <Payment />
      </section>
    </div>
  )
}

export default OverallInfo

const Container = css`
  ${FlexColCenter}
  width: 100%;
  margin: 0 auto;
  max-width: 768px;
  font-size: ${FONT_SIZE_STYLE.large};
  margin-top: 40px;
`

const OverallInfoSection = css``

const BeforeNextButtonSection = css`
  ${FlexCenter}
  margin-top: 30px;
`
