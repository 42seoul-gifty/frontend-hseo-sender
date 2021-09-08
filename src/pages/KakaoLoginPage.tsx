import React from 'react'
import { css } from '@emotion/react'
import { useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from 'config'

const KakaoLoginPage: React.FC = () => {
  const code = new URL(window.location.href).searchParams.get('code')

  useEffect(() => {
    const getToken = async () => {
      try {
        const tokenData = await axios.get(`${BASE_URL}/login/kakao`, {
          headers: {
            'Authorization-code': code,
            withCredentials: true,
          },
        })
        console.log(tokenData)
      } catch (e) {
        console.log(e)
      }
    }

    getToken()
    //window.location.assign('/main')
  }, [])

  return (
    <div css={Container}>
      <h1>카카오 redirected {code}</h1>
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
