import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import { css } from '@emotion/react'
import { AiOutlineUser } from 'react-icons/ai'
import { ButtonDefault } from 'styles/GlobalStyles'
import Modal from 'components/Modal'
import { showMyPageModal } from 'store/actions/modal'

const MainPage: React.FC = () => {
  const history = useHistory()
  const dispatch = useDispatch()

  const handleMenuButtonClick = (menu: string) => {
    history.push(`/${menu}`)
  }

  const myMenuButtonClick = () => {
    dispatch(showMyPageModal())
  }

  return (
    <div css={Container}>
      main
      <button css={ButtonDefault} onClick={() => handleMenuButtonClick('gift')}>
        선물하기
      </button>
      <button css={ButtonDefault} onClick={() => handleMenuButtonClick('sent')}>
        보낸 선물 리스트
      </button>
      <button css={ButtonDefault} onClick={myMenuButtonClick}>
        <AiOutlineUser />
      </button>
      <Modal>
        <h1>my page</h1>
      </Modal>
    </div>
  )
}

export default MainPage

const Container = css`
  width: 60%;
  margin: 0 auto;
  max-width: 1256px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`
