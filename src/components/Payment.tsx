import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { css } from '@emotion/react'
import { FlexCenter, FlexColCenter, FONT_SIZE_STYLE } from 'styles/GlobalStyles'

import {
  Iorder,
  IMP_CODE,
  ageSelections,
  priceSelections,
  genderSelections,
} from 'config'

import { RequestPayParams, RequestPayResponse } from 'iamportTypes'
import { RootState } from 'store/configureStore'
import axios from 'axios'
import { BASE_URL } from 'config'

export type PaymentData = {
  success: boolean
  merchant_uid: string
  error_msg: string
  imp_uid: string | null
  error_code: string
}

const Payment: React.FC = () => {
  const order = useSelector((state: RootState) => state.order)
  const index = useSelector((state: RootState) => state.index)
  const id = localStorage.getItem('user_id')
  const accessToken: string | null = localStorage.getItem('access_token')

  const header = {
    Authorization: `Bearer ${accessToken}`,
    'Content-Type': 'application/json',
  }

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
      amount: amount,
      buyer_tel: '00-000-0000',
    }
    const callback = async (response: RequestPayResponse) => {
      const { success, merchant_uid, error_msg, imp_uid, error_code } = response
      console.log('getting pay response?')
      console.log(imp_uid)
      console.log(merchant_uid)

      if (success) {
        try {
          const response = await axios({
            method: 'post',
            headers: header,
            url: `${BASE_URL}/payment/validation?merchant_uid=${merchant_uid}&imp_uid=${imp_uid}`,
          })
          console.log(response)
        } catch (e) {
          console.log(error_msg)
        }
      } else {
        // 주문 상태 취소로 변경? 주문 삭제?하는 api 호출
        console.log('결제 취소')
      }
    }
    window.IMP?.request_pay(data, callback)
  }

  const handlePayment = async () => {
    const orderData: Iorder = {
      giver_name: order.giver_name,
      giver_phone: order.giver_phone,
      receiver_name: order.receiver_name,
      receiver_phone: order.receiver_phone,
      gender: [index.genderIndex].toString(),
      age: [index.ageIndex].toString(),
      price: [index.priceIndex].toString(),
    }

    try {
      const res = await axios({
        method: 'post',
        url: `${BASE_URL}/users/${id}/orders`,
        headers: header,
        data: orderData,
      })
      if (res.data.success) {
        console.log(res.data.merchant_uid)
        handleIMP(res.data.merchant_uid)
      }
    } catch (e) {
      console.log('order 생성 실패')
    }
  }

  return <button onClick={handlePayment}>결제하기</button>
}

export default Payment
