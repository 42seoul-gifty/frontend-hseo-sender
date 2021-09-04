import React, { Dispatch, SetStateAction } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { css } from '@emotion/react'
import { RootState } from 'store/configureStore'

interface IProps {
  pageState: string
  setPageState: Dispatch<SetStateAction<string>>
}

const OverallInfo: React.FC<IProps> = ({ pageState, setPageState }) => {
  const order = useSelector((state: RootState) => state.order)
  const dispatch = useDispatch()

  console.log(pageState)

  return (
    <div css={Container}>
      선물 정보 확인
      <div>
        <h1>{order.receiver_name}</h1>
        <div>
          <span>연락처</span>
          <span>{order.receiver_phone}</span>
        </div>
        <div>
          <span>성별</span>
          <span>{order.gender}</span>
        </div>
        <div>
          <span>나이</span>
          <span>{order.age}</span>
        </div>
        <div>
          <span>예산</span>
          <span>{order.price}</span>
        </div>
      </div>
      <button>발송 선물 확인하기</button>
      <button onClick={() => setPageState('gift')}>이전으로</button>
      <button>결제하기</button>
    </div>
  )
}

export default OverallInfo

const Container = css`
  width: 60%;
  margin: 0 auto;
  max-width: 1256px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`
