import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { css } from '@emotion/react'

import { BOX_STYLE, COLOR_STYLE } from 'styles/GlobalStyles'
import { RootState } from 'store/configureStore'
import { hideModal } from 'store/actions/modal'
import { MyPage, Policy, Privacy, Warning } from 'components/modals'

const Modal: React.FC = () => {
  const dispatch = useDispatch()
  const modal = useSelector((state: RootState) => state.modal)

  if (
    !modal.showWarningModal &&
    !modal.showMyPageModal &&
    !modal.showPolicyModal &&
    !modal.showPrivacyModal
  ) {
    return <>{null}</>
  }

  const renderChildren = () => {
    if (modal.showMyPageModal) return <MyPage />
    if (modal.showPolicyModal) return <Policy />
    if (modal.showPrivacyModal) return <Privacy />
    if (modal.showWarningModal) return <Warning />
  }

  const handleClose = () => {
    dispatch(hideModal())
  }

  return (
    <>
      <div css={Dimmer} onClick={handleClose}>
        <div css={ModalWrapper} onClick={(e) => e.stopPropagation()}>
          {renderChildren()}
          <button onClick={handleClose}>x</button>
        </div>
      </div>
    </>
  )
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
