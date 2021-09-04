import React, { useState, Dispatch, SetStateAction } from 'react'
import { useHistory } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'
import { css } from '@emotion/react'
import { RootState } from 'store/configureStore'

interface IProps {
  pageState: string
  setPageState: Dispatch<SetStateAction<string>>
}

const OverallInfo: React.FC<IProps> = ({ pageState, setPageState }) => {
  console.log(pageState)

  return (
    <div css={Container}>
      선물 정보 확인
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
