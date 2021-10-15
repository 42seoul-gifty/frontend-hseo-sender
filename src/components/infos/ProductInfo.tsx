import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { css } from '@emotion/react'
import qs from 'querystring'

import { FlexCenter, FlexColCenter, FONT_SIZE_STYLE } from 'styles/GlobalStyles'
import { RootState } from 'store/configureStore'
import { setPageInfo } from 'store/actions/page'
import api from 'api'
import ProductListView from './ProductListItem'
import Payment from 'components/Payment'

const ProductInfo: React.FC = () => {
  const order = useSelector((state: RootState) => state.order)
  const dispatch = useDispatch()
  const [productList, setProductList] = useState<any[]>([])

  const accessToken: string = localStorage.getItem('access_token') || ''

  useEffect(() => {
    const fetchGiftCandidate = async () => {
      try {
        const res = await api.get(`/products`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
          params: {
            age: order.age,
            gender: order.gender,
            price: order.price,
          },
          paramsSerializer: (params) => {
            return qs.stringify(params)
          },
        })
        const data = res.data.data
        setProductList([...data])
      } catch (e) {
        console.log(e)
      }
    }

    fetchGiftCandidate()
  }, [])

  return (
    <div css={Container}>
      <section css={ProductInfoSection}>
        <h1>선물 리스트</h1>
        {`age: ${order.age}, price: ${order.price}`}
      </section>
      {productList.map((item) => (
        <ProductListView
          key={item.id}
          thumbnail={item.thumbnail}
          name={item.name}
        />
      ))}
      <section css={BeforeNextButtonSection}>
        <button onClick={() => dispatch(setPageInfo('overall'))}>
          이전으로
        </button>
        <Payment />
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
