import React from 'react'
import { useHistory } from 'react-router'
import { css } from '@emotion/react'
import { FONT_SIZE_STYLE } from 'styles/GlobalStyles'

import ContactInput from 'components/inputs/ContactInput'

const SenderInfo: React.FC = () => {
  const history = useHistory()

  return (
    <div css={Container}>
      <div>보내는 분의 정보를 알려주세요</div>
      <div>이름과 연락처를 확인해 주세요</div>
      <ContactInput
        names={['giver_name', 'giver_phone']}
        beforeClick={() => history.push('/main')}
        nextPage={'receiver'}
      />
    </div>
  )
}

export default SenderInfo

const Container = css`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  max-width: 768px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  font-size: ${FONT_SIZE_STYLE.large};
  margin-top: 40px;
`
