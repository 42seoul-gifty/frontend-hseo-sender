import React from 'react'
import { useDispatch } from 'react-redux'
import { css } from '@emotion/react'
import { FlexColCenter, FONT_SIZE_STYLE } from 'styles/GlobalStyles'

import {
  hideModal,
  ModalType,
  showModal,
  SHOW_POLICY_MODAL,
  SHOW_PRIVACY_MODAL,
} from 'store/actions/modal'
import api from 'api'
import { useHistory } from 'react-router'

const MyPage: React.FC = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  const handleModalButton = (typename: ModalType) => {
    dispatch(hideModal())
    dispatch(showModal(typename))
  }

  const handlePresentationButton = () => {
    window.open('https://gifty4u.co.kr', '_blank')
  }

  const handleLogout = async () => {
    const refreshToken = localStorage.getItem('refresh_token')
    const accessToken = localStorage.getItem('access_token')
    try {
      const res = await api({
        method: 'post',
        url: `/logout`,
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        data: {
          refresh_token: refreshToken,
        },
      })
      console.log(res.data)
      dispatch(hideModal())
      localStorage.setItem('user_id', '')
      localStorage.setItem('refresh_token', '')
      localStorage.setItem('access_token', '')
      localStorage.setItem('nickname', '')
      alert('로그아웃 되었습니다')
      history.push('/')
    } catch (e) {
      console.log(e)
    }
  }
  return (
    <div css={Container}>
      <h1>{localStorage.getItem('nickname')}님 안녕하세요!</h1>
      <button onClick={() => handleModalButton(SHOW_POLICY_MODAL)}>
        이용약관
      </button>
      <button onClick={() => handleModalButton(SHOW_PRIVACY_MODAL)}>
        정보보안규약
      </button>
      <button onClick={handlePresentationButton}>기프티소개</button>
      <button onClick={handleLogout}>로그아웃</button>
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
