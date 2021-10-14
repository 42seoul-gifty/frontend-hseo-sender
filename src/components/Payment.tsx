import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import { css } from '@emotion/react'

import { FlexCenter, FlexColCenter, FONT_SIZE_STYLE } from 'styles/GlobalStyles'
import { IMP_CODE, SelectType } from 'config'
import api from 'api'
import { RequestPayParams, RequestPayResponse } from 'iamportTypes'
import { RootState } from 'store/configureStore'
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
  const accessToken: string = localStorage.getItem('access_token') || ''
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
          headers: header,
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
    const amount: number =
      Number(prices.filter((price) => price.id === order.price)[0].value) || 0

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
          const response = await api({
            method: 'post',
            headers: header,
            url: `/payment/validation`,
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
    const orderData = { ...order, gender: [order.gender], age: [order.age] }
    try {
      const res = await api({
        method: 'post',
        url: `/users/${id}/orders`,
        headers: header,
        data: orderData,
      })
      if (res.data.success) {
        console.log(res.data.data.merchant_uid)
        handleIMP(res.data.data.merchant_uid)
      }
    } catch (e) {
      console.log('order 생성 실패')
      console.log(e)
    }
  }

  return <button onClick={handlePayment}>결제하기</button>
}

export default Payment
