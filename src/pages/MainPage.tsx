import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { css } from '@emotion/react'
import { AiOutlineUser } from 'react-icons/ai'
import { ButtonDefault, FONT_SIZE_STYLE } from 'styles/GlobalStyles'
import { RootState } from 'store/configureStore'
import { showModal, SHOW_MYPAGE_MODAL } from 'store/actions/modal'

//
import { BASE_URL } from 'config'
import axios from 'axios'
//

const MainPage: React.FC = () => {
  const history = useHistory()
  const dispatch = useDispatch()

  localStorage.setItem(
    'access_token',
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjM0MDE3MjQ3LCJqdGkiOiIwNDIwM2Q3MDlhYjg0YWFhYjJiYzAyYTc1MDBhZGNjMSIsInVzZXJfaWQiOjJ9.QZOMt8p3u77T5ID2iNTGbW8YgAw3p7h5RODxbNh6LTg',
  )
  localStorage.setItem('user_id', '2')
  localStorage.setItem('nickname', '서희영')
  const accessToken = localStorage.getItem('access_token')
  console.log(accessToken)
  /*
  useEffect(() => {
    const getIdNickname = () => {
      const userId = localStorage.getItem('user_id')
      const nickname = localStorage.getItem('nickname')
      const accessToken = localStorage.getItem('access_token')
      console.log(userId, nickname, accessToken)
    }

    getIdNickname()
  }, [])
*/

  const handleMenuButtonClick = (menu: string) => {
    history.push(`/${menu}`)
  }

  const myMenuButtonClick = () => {
    dispatch(showModal(SHOW_MYPAGE_MODAL))
  }

  return (
    <div css={Container}>
      <button
        css={MainMenuButton}
        onClick={() => handleMenuButtonClick('gift')}
      >
        선물하기
      </button>
      <button
        css={MainMenuButton}
        onClick={() => handleMenuButtonClick('sent')}
      >
        보낸 선물 리스트
      </button>
      <button css={MainMenuButton} onClick={myMenuButtonClick}>
        <AiOutlineUser />
      </button>
    </div>
  )
}

export default MainPage

const Container = css`
  width: 100%;
  margin: 0 auto;
  max-width: 768px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  font-size: ${FONT_SIZE_STYLE.large};
`
const MainMenuButton = css`
  ${ButtonDefault}
  font-size: ${FONT_SIZE_STYLE.large};
  background-color: #4a847a;
  color: white;
  margin: 10px;
  padding: 10px;
  border-radius: 6px;
`
