import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { css } from '@emotion/react'

import { FlexCenter, FlexColCenter, FONT_SIZE_STYLE } from 'styles/GlobalStyles'

import { RootState } from 'store/configureStore'
import { setPageInfo } from 'store/actions/page'
import axios from 'axios'
import { BASE_URL } from 'config'
import ProductListView from './ProductListItem'
import Payment from 'components/Payment'

const ProductInfo: React.FC = () => {
  const order = useSelector((state: RootState) => state.order)
  const dispatch = useDispatch()
  const [productList, setProductList] = useState<any[]>([])

  const accessToken: string | null = localStorage.getItem('access_token')
  console.log(accessToken)

  useEffect(() => {
    const fetchGiftCandidate = async () => {
      const url = `${BASE_URL}/products?price=${order.price}&age=${order.age}&gender=${order.gender}`
      try {
        const res = await axios.get(url, {
          headers: {
            //Authorization: `Bearer ${accessToken}`,
            Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjM0MTgwNTYyLCJqdGkiOiI0YzIwYTRjMGIxMzM0ODVkYjc5NWE1ZjQyMTQ2YTNiMiIsInVzZXJfaWQiOjJ9.fD1htg995QAFxvAgI0UBNIxO5PQUZ5aL9HCwLSRH6OI`,
          },
        })
        const data = res.data.data
        console.log(data)
        setProductList([...data])
        console.log(productList)
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
