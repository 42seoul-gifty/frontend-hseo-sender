import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { css } from '@emotion/react'
import { RootState } from 'store/configureStore'
import {
  SenderInfo,
  ReceiverInfo,
  GiftInfo,
  OverallInfo,
} from 'components/infos'
import ProductInfo from 'components/infos/ProductInfo'

const GiftPage: React.FC = () => {
  const page = useSelector((state: RootState) => state.page)

  if (page === 'receiver') {
    return <ReceiverInfo />
  } else if (page === 'gift') {
    return <GiftInfo />
  } else if (page === 'overall') {
    return <OverallInfo />
  } else if (page === 'product') {
    return <ProductInfo />
  }

  return <SenderInfo />
}

export default GiftPage
