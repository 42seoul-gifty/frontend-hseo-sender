import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { css } from '@emotion/react'
import { FlexCenter, FlexColCenter, FONT_SIZE_STYLE } from 'styles/GlobalStyles'
import { Iorder, IMP_CODE } from 'config'
import { setPageInfo } from 'store/actions/page'
import { setAgeIndex, setPriceIndex, setGenderIndex } from 'store/actions'
import { RootState } from 'store/configureStore'
import axios from 'axios'
import {
  BASE_URL,
  ageSelections,
  priceSelections,
  genderSelections,
} from 'config'
import { RequestPayParams, RequestPayResponse } from 'iamportTypes'

export type PaymentData = {
  success: boolean
  merchant_uid: string
  error_msg: string
  imp_uid: string | null
  error_code: string
}

const initialPaymentData = {
  success: false,
  merchant_uid: '',
  error_msg: '',
  imp_uid: '',
  error_code: '',
}

const OverallInfo: React.FC = () => {
  const order = useSelector((state: RootState) => state.order)
  const index = useSelector((state: RootState) => state.index)
  const dispatch = useDispatch()
  const id = localStorage.getItem('user_id')
  const accessToken: string | null = localStorage.getItem('access_token')
  const [paymentData, setPaymentData] =
    useState<PaymentData>(initialPaymentData)

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

  const getGenderIndex = () => {
    const filtered = genderSelections.filter(
      (item) => item.value === order.gender,
    )
    dispatch(setGenderIndex(filtered[0].id))
  }

  useEffect(() => {
    getAgeIndex()
    getPriceIndex()
    getGenderIndex()
  }, [])

  const handleIMP = (merchant_uid: string) => {
    window.IMP?.init(IMP_CODE)
    const amount: number =
      priceSelections
        .filter((price) => price.value === order.price)
        .map((price) => price.amount)[0] || 0
    if (!amount) {
      alert('결제 금액을 확인해주세요')
      return
    }
    const data: RequestPayParams = {
      pg: 'html5_inicis',
      pay_method: 'card',
      merchant_uid: merchant_uid,
      //amount: amount,
      amount: 10,
      buyer_tel: '00-000-0000',
    }
    const callback = (response: RequestPayResponse) => {
      const { success, merchant_uid, error_msg, imp_uid, error_code } = response

      //console.log(response)
      const resPayment: PaymentData = {
        success: success,
        merchant_uid: merchant_uid,
        error_code: error_code,
        error_msg: error_msg,
        imp_uid: imp_uid,
      }
      setPaymentData(resPayment)
    }
    window.IMP?.request_pay(data, callback)
  }

  const handlePayment = async () => {
    const orderData: Iorder = {
      giver_name: order.giver_name,
      giver_phone: order.giver_phone,
      receiver_name: order.receiver_name,
      receiver_phone: order.receiver_phone,
      gender: index.genderIndex.toString(),
      age: index.ageIndex.toString(),
      price: index.priceIndex.toString(),
    }
    const header = {
      //Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    }
    try {
      const res = await axios({
        method: 'post',
        url: `${BASE_URL}/users/${id}/orders`,
        headers: header,
        data: orderData,
      })
      if (res.data.success) {
        await handleIMP(res.data.merchant_uid)
        //console.log(paymentData)
        if (paymentData.success) {
          try {
            const response = await axios({
              method: 'post',
              url: `${BASE_URL}/payment/validation?imp_uid=${paymentData.imp_uid}&merchant_uid=${paymentData.merchant_uid}`,
            })
            console.log(response)
          } catch (e) {
            console.log('payment error')
          }
        }
      }
    } catch (e) {
      console.log('order 생성 실패')
    }
  }

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
