import React from 'react'
import { css } from '@emotion/react'
import { useEffect } from 'react'
import Modal from 'components/Modal'

const KakaoLoginPage: React.FC = () => {
  const code = new URL(window.location.href).searchParams.get('code')

  useEffect(() => {
    window.location.assign('/main')
  }, [])

  return (
    <div css={Container}>
      <h1>카카오 redirected {code}</h1>
      <Modal />
    </div>
  )
}

export default KakaoLoginPage

const Container = css`
  width: 60%;
  margin: 0 auto;
  max-width: 1256px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`
