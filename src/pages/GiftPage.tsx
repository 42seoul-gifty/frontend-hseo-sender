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
  const [pageState, setPageState] = useState('sender')

  if (pageState === 'receiver') {
    return <ReceiverInfo pageState={pageState} setPageState={setPageState} />
  } else if (pageState === 'gift') {
    return <GiftInfo pageState={pageState} setPageState={setPageState} />
  } else if (pageState === 'overall') {
    return <OverallInfo pageState={pageState} setPageState={setPageState} />
  } else if (pageState === 'product') {
    return <ProductInfo pageState={pageState} setPageState={setPageState} />
  }

  return <SenderInfo pageState={pageState} setPageState={setPageState} />
}

export default GiftPage
