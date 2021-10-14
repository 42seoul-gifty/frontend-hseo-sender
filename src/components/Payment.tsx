import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { css } from '@emotion/react'
import { FlexCenter, FlexColCenter, FONT_SIZE_STYLE } from 'styles/GlobalStyles'

import { Iorder, IMP_CODE, SelectType } from 'config'
import api from 'api'
import { RequestPayParams, RequestPayResponse } from 'iamportTypes'
import { RootState } from 'store/configureStore'
import axios from 'axios'
import { BASE_URL } from 'config'
import { useHistory } from 'react-router'
import { setPageInfo } from 'store/actions/page'

export type PaymentData = {
  success: boolean
  merchant_uid: string
  error_msg: string
  imp_uid: string | null
  error_code: string
}

const Payment: React.FC = () => {
  const order = useSelector((state: RootState) => state.order)
  const id = localStorage.getItem('user_id')
  const accessToken: string | null = localStorage.getItem('access_token')
  const history = useHistory()
  const dispatch = useDispatch()

  const header = {
    Authorization: `Bearer ${accessToken}`,
  }

  const [prices, setPrices] = useState<SelectType[]>([])

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const res = await api.get(`/prices`, {
          headers: {
            //Authorization: `Bearer ${accessToken}`,
            Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjM0MTgwNTYyLCJqdGkiOiI0YzIwYTRjMGIxMzM0ODVkYjc5NWE1ZjQyMTQ2YTNiMiIsInVzZXJfaWQiOjJ9.fD1htg995QAFxvAgI0UBNIxO5PQUZ5aL9HCwLSRH6OI`,
          },
        })
        setPrices(res.data.data)
      } catch (e) {
        console.log(e)
      }
    }

    fetchPrices()
  }, [])

  const handleIMP = (merchant_uid: string) => {
    window.IMP?.init(IMP_CODE)
    const amount: number | undefined = prices.filter(
      (price) => price.id === order.price,
    )[0].amount

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
            url: `${BASE_URL}/payment/validation`,
            data: {
              merchant_uid: merchant_uid,
              imp_uid: imp_uid,
            },
          })
          console.log(response)
          alert('주문이 완료되었습니다')
          dispatch(setPageInfo('sender'))
          history.push(`/main`)
        } catch (e) {
          console.log(error_msg)
        }
      } else {
        // 주문 상태 취소로 변경? 주문 삭제?하는 api 호출
        alert('주문을 완료하려면 결제해 주세요')
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
      gender: order.gender,
      age: order.age,
      price: order.price,
    }

    try {
      const res = await axios({
        method: 'post',
        url: `${BASE_URL}/users/${id}/orders`,
        headers: header,
        data: order,
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
