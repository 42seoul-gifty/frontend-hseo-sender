import React from 'react'
import { useDispatch } from 'react-redux'
import { css } from '@emotion/react'
import { FlexCenter, FlexColCenter, FONT_SIZE_STYLE } from 'styles/GlobalStyles'

import {
  hideModal,
  showPolicyModal,
  showPrivacyModal,
} from 'store/actions/modal'

const MyPage: React.FC = () => {
  const dispatch = useDispatch()

  const handlePolicyButton = () => {
    dispatch(hideModal())
    dispatch(showPolicyModal())
  }

  const handlePrivacyButton = () => {
    dispatch(hideModal())
    dispatch(showPrivacyModal())
  }

  const handlePresentationButton = () => {
    window.open('https://gifty4u.co.kr', '_blank')
  }

  return (
    <div css={Container}>
      <h1>님 안녕하세요!</h1>
      <button onClick={handlePolicyButton}>이용약관</button>
      <button onClick={handlePrivacyButton}>정보보안규약</button>
      <button onClick={handlePresentationButton}>기프티소개</button>
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
