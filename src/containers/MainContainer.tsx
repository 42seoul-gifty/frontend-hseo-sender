import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import { css } from '@emotion/react'
import { AiOutlineUser } from 'react-icons/ai'
import { ButtonDefault } from 'styles/GlobalStyles'
import Modal from 'components/Modal'
import { showModal } from 'store/actions/modal'

const MainContainer: React.FC = () => {
  const history = useHistory()
  const dispatch = useDispatch()

  const handleMenuButtonClick = (menu: string) => {
    history.push(`/${menu}`)
  }

  const myMenuButtonClick = () => {
    dispatch(showModal('user my page'))
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
      <Modal />
    </div>
  )
}

export default MainContainer

const Container = css`
  width: 60%;
  margin: 0 auto;
  max-width: 1256px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`
