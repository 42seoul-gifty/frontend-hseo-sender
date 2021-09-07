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
import { setPageInfo } from 'store/actions/page'
import axios from 'axios'
import { BASE_URL } from 'config'
import { hideModal, showPolicyModal } from 'store/actions/modal'

const MyPage: React.FC = () => {
  const dispatch = useDispatch()

  const handlePolicyButton = () => {
    dispatch(hideModal())
    dispatch(showPolicyModal())
  }

  return (
    <div css={Container}>
      <h1>님 안녕하세요!</h1>
      <button onClick={handlePolicyButton}>이용약관</button>
      <button>정보보안규약</button>
      <button>기프티소개</button>
      <button>로그아웃</button>
    </div>
  )
}

export default MyPage

const Container = css`
  ${FlexColCenter}
  width: 100%;
  margin: 0 auto;
  max-width: 768px;
  font-size: ${FONT_SIZE_STYLE.large};
  margin-top: 40px;
`

const MyPageSection = css``

const BeforeNextButtonSection = css`
  ${FlexCenter}
  margin-top: 30px;
`
