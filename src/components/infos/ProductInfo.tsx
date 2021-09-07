import React, { Dispatch, SetStateAction } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { css } from '@emotion/react'
import { FlexCenter, FlexColCenter, FONT_SIZE_STYLE } from 'styles/GlobalStyles'
import {
  GENDER_CATEGORY_INDEX,
  AGE_CATEGORY_INDEX,
  PRICE_CATEGORY_INDEX,
} from 'config'
import { RootState } from 'store/configureStore'
import axios from 'axios'
import { BASE_URL } from 'config'

interface IProps {
  pageState: string
  setPageState: Dispatch<SetStateAction<string>>
}

const ProductInfo: React.FC<IProps> = ({ pageState, setPageState }) => {
  const order = useSelector((state: RootState) => state.order)
  const dispatch = useDispatch()

  console.log(pageState)

  return (
    <div css={Container}>
      <section css={ProductInfoSection}>선물 리스트</section>
      <section css={BeforeNextButtonSection}>
        <button onClick={() => setPageState('overall')}>이전으로</button>
        <button>결제하기</button>
      </section>
    </div>
  )
}

export default ProductInfo

const Container = css`
  ${FlexColCenter}
  width: 100%;
  margin: 0 auto;
  max-width: 768px;
  font-size: ${FONT_SIZE_STYLE.large};
  margin-top: 40px;
`

const ProductInfoSection = css``

const BeforeNextButtonSection = css`
  ${FlexCenter}
  margin-top: 30px;
`
