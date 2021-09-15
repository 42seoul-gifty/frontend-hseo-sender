import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { css } from '@emotion/react'
import { FlexCenter, FlexColCenter, FONT_SIZE_STYLE } from 'styles/GlobalStyles'

import { RootState } from 'store/configureStore'
import { setPageInfo } from 'store/actions/page'
import axios, { AxiosResponse } from 'axios'
import { ageSelections, priceSelections, BASE_URL, SelectType } from 'config'
import ProductListView from './ProductListItem'

const ProductInfo: React.FC = () => {
  const order = useSelector((state: RootState) => state.order)
  const index = useSelector((state: RootState) => state.index)
  const dispatch = useDispatch()
  const [productList, setProductList] = useState<any[]>([])

  const accessToken: string | null = localStorage.getItem('access_token')

  useEffect(() => {
    const fetchGiftCandidate = async () => {
      const url = `${BASE_URL}/products?gender=1&price=${index.priceIndex}&age=${index.ageIndex}`
      try {
        const res = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        const data = res.data.data
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
        {`age: ${index.ageIndex}, price: ${index.priceIndex}`}
      </section>
      {productList.map((item) => (
        <ProductListView thumbnail={item.thumbnail} name={item.name} />
      ))}
      <section css={BeforeNextButtonSection}>
        <button onClick={() => dispatch(setPageInfo('overall'))}>
          이전으로
        </button>
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
