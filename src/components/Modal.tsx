import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ReactDOM, { createPortal } from 'react-dom'
import { css } from '@emotion/react'
import { BOX_STYLE, COLOR_STYLE, FONT_SIZE_STYLE } from 'styles/GlobalStyles'
import { RootState } from 'store/configureStore'
import { hideModal } from 'store/actions/modal'

interface IProps {
  children: React.ReactNode
}
const Modal: React.FC<IProps> = ({ children }) => {
  const dispatch = useDispatch()
  const modal = useSelector((state: RootState) => state.modal)

  const handleClose = () => {
    dispatch(hideModal())
  }

  const modalComponent = (
    <>
      <div css={Dimmer} onClick={handleClose}>
        <div css={ModalWrapper} onClick={(e) => e.stopPropagation()}>
          {children}
          <button onClick={handleClose}>x</button>
        </div>
      </div>
    </>
  )

  return modal.showAgeModal ||
    modal.showMyPageModal ||
    modal.showPriceModal ||
    modal.showWarningModal
    ? ReactDOM.createPortal(
        modalComponent,
        document.querySelector('#modal-root') as HTMLElement,
      )
    : null
}

export default Modal

const Dimmer = css`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  background-color: #000;
  opacity: 0.5;
`

const ModalWrapper = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  width: 25rem;
  top: 33%;
  left: 50%;
  z-index: 1000;
  background-color: ${COLOR_STYLE.white};
  padding: 3rem 2.5rem 4.5rem 2.5rem;
  border-radius: 2px;
  box-shadow: ${BOX_STYLE.shadowDarker};
  text-align: center;
  margin: 0;
  padding: 40px 30px;
`

const ModalMessage = css`
  color: ${COLOR_STYLE.greyDarkest};
  font-size: ${FONT_SIZE_STYLE.medium};
`
