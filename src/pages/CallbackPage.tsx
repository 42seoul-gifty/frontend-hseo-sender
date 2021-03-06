import React, { useEffect } from 'react'

import { css } from '@emotion/react'
import api from 'api'

interface IProps {
  url: string
}

const CallbackPage: React.FC<IProps> = ({ url }) => {
  const code = new URL(window.location.href).searchParams.get('code')

  useEffect(() => {
    const getToken = async () => {
      try {
        const res = await api.get(`/login/${url}`, {
          headers: {
            'Authorization-Code': code,
          },
        })

        const access_token = res.data.data.access_token
        const refresh_token = res.data.data.refresh_token
        const user_id = res.data.data.user.id
        const nickname = res.data.data.user.nickname

        localStorage.setItem('access_token', access_token)
        localStorage.setItem('refresh_token', refresh_token)
        localStorage.setItem('user_id', user_id.toString())
        localStorage.setItem('nickname', nickname)

        window.location.assign('/main')
      } catch (e) {
        console.log(e)
      }
    }

    getToken()
  }, [])

  return (
    <div css={Container}>
      <h1>로그인 중입니다. 잠시만 기다려 주세요</h1>
    </div>
  )
}

export default CallbackPage

const Container = css`
  width: 60%;
  margin: 0 auto;
  max-width: 1256px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`
