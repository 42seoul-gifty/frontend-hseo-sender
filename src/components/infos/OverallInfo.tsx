import React, { Dispatch, SetStateAction } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { css } from '@emotion/react'
import { FlexCenter, FlexColCenter, FONT_SIZE_STYLE } from 'styles/GlobalStyles'
import {
  GENDER_CATEGORY_INDEX,
  AGE_CATEGORY_INDEX,
  PRICE_CATEGORY_INDEX,
} from 'config'
import { setPageInfo } from 'store/actions/page'
import { RootState } from 'store/configureStore'
import axios from 'axios'
import { BASE_URL } from 'config'

const OverallInfo: React.FC = () => {
  const order = useSelector((state: RootState) => state.order)
  const dispatch = useDispatch()
  const accessToken: string = 'token'

  const handleGiftCheck = async () => {
    const url = `${BASE_URL}/products?gender=${GENDER_CATEGORY_INDEX}&price=${PRICE_CATEGORY_INDEX}&age=${AGE_CATEGORY_INDEX}`
    try {
      const res = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      console.log(res.data)
    } catch (e) {
      console.log(e)
    }
    dispatch(setPageInfo('product'))
  }

  const handlePayment = async () => {
    try {
      const res = await axios.post(`${BASE_URL}/orders`, order)
      const res2 = await axios.get(`${BASE_URL}/orders`)
      console.log(res2)
    } catch (e) {
      console.log(e)
    }
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
      <button onClick={handleGiftCheck}>발송 선물 확인하기</button>
      <section css={BeforeNextButtonSection}>
        <button onClick={() => dispatch(setPageInfo('gift'))}>이전으로</button>
        <button onClick={handlePayment}>결제하기</button>
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
