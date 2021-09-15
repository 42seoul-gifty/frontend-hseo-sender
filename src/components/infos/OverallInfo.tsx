import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { css } from '@emotion/react'
import { FlexCenter, FlexColCenter, FONT_SIZE_STYLE } from 'styles/GlobalStyles'
import {
  GENDER_CATEGORY_INDEX,
  AGE_CATEGORY_INDEX,
  PRICE_CATEGORY_INDEX,
  Iorder,
} from 'config'
import { setPageInfo } from 'store/actions/page'
import { setAgeIndex, setPriceIndex } from 'store/actions'
import { RootState } from 'store/configureStore'
import axios, { AxiosResponse } from 'axios'
import { BASE_URL, ageSelections, priceSelections, SelectType } from 'config'
import { RequestPayParams, RequestPayResponse } from 'iamportTypes'

const OverallInfo: React.FC = () => {
  const order = useSelector((state: RootState) => state.order)
  const dispatch = useDispatch()
  const id = localStorage.getItem('user_id')
  const accessToken: string | null = localStorage.getItem('access_token')

  const getAgeIndex = () => {
    const filtered = ageSelections.filter((item) => item.value === order.age)
    dispatch(setAgeIndex(filtered[0].id))
  }

  const getPriceIndex = () => {
    const filtered = priceSelections.filter(
      (item) => item.value === order.price,
    )
    dispatch(setPriceIndex(filtered[0].id))
  }

  const handlePayment = async () => {
    /*
    const orderData: Iorder = {
      giver_name: order.giver_name,
      giver_phone: order.giver_phone,
      receiver_name: order.receiver_name,
      receiver_phone: order.receiver_phone,
      gender: order.gender,
      age: order.age,
      price: order.price,
    }
    const header = {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    }
    try {
      const res = await axios({
        method: 'post',
        url: `${BASE_URL}/users/${id}/orders`,
        headers: header,
        data: orderData,
      })
      console.log(res)
    } catch (e) {
      console.log(e)
    }
*/
    window.IMP?.init('iamport')
    const amount: string =
      priceSelections
        .filter((price) => price.value === order.price)
        .map((price) => price.amount)[0] || '0'
    if (amount === '0') {
      alert('결제 금액을 확인해주세요')
      return
    }
    const data: RequestPayParams = {
      pg: 'html5_inicis',
      pay_method: 'card',
      merchant_uid: `mid_${new Date().getTime()}`,
      amount: amount,
    }
    const callback = (response: RequestPayResponse) => {
      const { success, merchant_uid, error_msg } = response
      if (success) {
        console.log(response)
      } else {
        console.log(response)
      }
    }
    window.IMP?.request_pay(data, callback)
  }

  const handleGiftlistButton = () => {
    getAgeIndex()
    getPriceIndex()
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
