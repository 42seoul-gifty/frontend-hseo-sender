import React from 'react'
import { css } from '@emotion/react'
import { useEffect } from 'react'
import Modal from 'components/Modal'
import { BASE_URL, CLIENT_ID, REDIRECT_URI } from 'config'
import axios, { AxiosResponse } from 'axios'

const KakaoLoginContainer: React.FC = () => {
  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get('code')
    if (!code) {
      return
    }
    const kakaoUrl = 'https://kauth.kakao.com/oauth/token'
    const data = {
      grant_type: 'authorization_code',
      cilent_id: CLIENT_ID,
      redirect_uri: REDIRECT_URI,
      code: code,
    }

    const getToken = async (code: string) => {
      const res: AxiosResponse = await axios({
        method: 'POST',
        headers: {
          Authorization: '0dd7f9a59b2d4d7cb34f6a6a4e441246',
          'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
        },
        url: kakaoUrl,
        data: JSON.stringify(data),
      })
      console.log(res)
      localStorage.setItem('data', JSON.stringify(res.data))
      return res
    }

    getToken(code)
    //window.location.assign('/main')
  }, [])

  return (
    <div css={Container}>
      <h1>카카오 redirected</h1>
      <Modal />
    </div>
  )
}

export default KakaoLoginContainer

const Container = css`
  width: 60%;
  margin: 0 auto;
  max-width: 1256px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`
