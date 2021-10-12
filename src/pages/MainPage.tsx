import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { css } from '@emotion/react'
import { AiOutlineUser } from 'react-icons/ai'
import { ButtonDefault, FONT_SIZE_STYLE } from 'styles/GlobalStyles'
import { RootState } from 'store/configureStore'
import Modal from 'components/modals/Modal'
import MyPage from 'components/modals/MyPage'
import Policy from 'components/modals/Policy'
import Privacy from 'components/modals/Privacy'
import { showModal, SHOW_MYPAGE_MODAL } from 'store/actions/modal'

//
import { BASE_URL } from 'config'
import axios from 'axios'
//

const MainPage: React.FC = () => {
  const history = useHistory()
  const modal = useSelector((state: RootState) => state.modal)
  const dispatch = useDispatch()

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

  const modalType = () => {
    if (modal.showMyPageModal) return <MyPage />
    if (modal.showPolicyModal) return <Policy />
    if (modal.showPrivacyModal) return <Privacy />
  }

  //

  useEffect(() => {
    const fetchGiftCandidate = async () => {
      const url = `${BASE_URL}/ages`
      try {
        const res = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        const data = res.data.data
        console.log(data)
      } catch (e) {
        console.log(e)
      }
    }

    fetchGiftCandidate()
  }, [])

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
