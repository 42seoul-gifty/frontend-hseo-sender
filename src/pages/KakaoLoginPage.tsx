import React, { useState } from 'react'
import { css } from '@emotion/react'
import { useEffect } from 'react'
import { BASE_URL } from 'config'
import axios from 'axios'

const KakaoLoginPage: React.FC = () => {
  const code = new URL(window.location.href).searchParams.get('code')
  console.log(code)

  useEffect(() => {
    const getToken = async () => {
      try {
        const res = await axios.post(`${BASE_URL}/login/kakao`, {
          headers: {
            Code: code,
          },
        })

        console.log(res)
        //const access_token = res.data.data.access_token
        const access_token =
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjM0MDA1ODkzLCJqdGkiOiI4M2IyNmVhZTlmZTY0N2I0ODhjYzQ2MTE4NTYwNzU5OCIsInVzZXJfaWQiOjR9.0fg02YY0g1R6PH9puRfPwdHeRfH11kFFpHJ44vp_FxI'
        //const refresh_token = res.data.data.refresh_token
        const refresh_token =
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTYzNDYwMzQ5MywianRpIjoiY2I1M2M3YTdjZGUxNGFlMzhjMGJlNjk1MTkxMTcwNTUiLCJ1c2VyX2lkIjo0fQ.1DOvCRCaRcwSMWnFqT0ApGkz_PcRs00RUg07mdhaIgw'
        //const user_id = res.data.data.user.id
        const user_id = 4
        //const nickname = res.data.data.user.nickname
        const nickname = '서희영'

        console.log(user_id)
        localStorage.setItem('access_token', access_token)
        localStorage.setItem('refresh_token', refresh_token)
        localStorage.setItem('user_id', user_id.toString())
        localStorage.setItem('nickname', nickname)
      } catch (e) {
        console.log(e)
      }
    }

    getToken()
    window.location.assign('/main')
  }, [])

  return (
    <div css={Container}>
      <h1>로그인 중입니다. 잠시만 기다려 주세요</h1>
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
