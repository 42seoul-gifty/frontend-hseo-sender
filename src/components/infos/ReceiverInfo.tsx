import React from 'react'
import { useDispatch } from 'react-redux'
import { css } from '@emotion/react'
import { FONT_SIZE_STYLE } from 'styles/GlobalStyles'

import { setPageInfo } from 'store/actions/page'
import ContactInput from 'components/inputs/ContactInput'

const ReceiverInfo: React.FC = () => {
  const dispatch = useDispatch()

  return (
    <div css={Container}>
      <div>받는 분의 정보를 알려주세요</div>
      <div>이름과 연락처를 확인해 주세요</div>
      <ContactInput
        names={['receiver_name', 'receiver_phone']}
        beforeClick={() => dispatch(setPageInfo('sender'))}
        nextPage={'gift'}
      />
    </div>
  )
}

export default ReceiverInfo

const Container = css`
  width: 100%;
  margin: 0 auto;
  max-width: 768px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  font-size: ${FONT_SIZE_STYLE.large};
  margin-top: 40px;
`
