import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { css } from '@emotion/react'
import { FlexCenter, FlexColCenter, FONT_SIZE_STYLE } from 'styles/GlobalStyles'

import { RootState } from 'store/configureStore'
import { setPageInfo } from 'store/actions/page'
import axios, { AxiosResponse } from 'axios'
import { ageSelections, priceSelections, BASE_URL, SelectType } from 'config'

interface IProps {
  thumbnail: string
  name: string
}

const ProductListView: React.FC<IProps> = ({ thumbnail, name }) => {
  return (
    <div css={Container}>
      <div>
        <img src={thumbnail} alt={name}></img>
        <span>{`$${name}`}</span>
      </div>
    </div>
  )
}

export default ProductListView

const Container = css`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(50%, auto));
  grid-auto-rows: minmax(100px, auto);
  gap: 10px;
  width: 100%;
  margin: 0 auto;
  max-width: 768px;
  font-size: ${FONT_SIZE_STYLE.large};
  margin-top: 40px;
`
