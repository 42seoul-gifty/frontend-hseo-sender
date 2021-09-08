import React from 'react'
import { css } from '@emotion/react'
import { useEffect } from 'react'
import { BASE_URL, CLIENT_ID, REDIRECT_URI } from 'config'
import api from 'api'
import { getTokenSourceMapRange } from 'typescript'
import axios from 'axios'
import querystring from 'querystring'

const KakaoLoginPage: React.FC = () => {
  const code = new URL(window.location.href).searchParams.get('code')

  const getToken = async () => {
    try {
      const res1 = await axios.get(`${BASE_URL}/ages`)

      /*
      const result = await axios({
        method: 'post',
        url: 'https://kauth.kakao.com/oauth/token',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        data: querystring.stringify({
          grant_type: 'authorization_code',
          client_id: `${CLIENT_ID}`,
          redirect_uri: `${REDIRECT_URI}`,
          code: `${code}`,
          client_secret: `SCKaF00YOhAslt61IrvuEyFOXnpoMhM7`,
        }),
      })
      */

      /*
      const tokenData = await axios.get(`${BASE_URL}/login/kakao`, {
        headers: {
          'Authorization-Code': `${code}`,
        },
      })
      */

      console.log(res1)
    } catch (e) {
      console.log(e)
    }
  }
  /*
  useEffect(() => {
    const getToken = async () => {
      try {
        const tokenData = await api({
          method: 'get',
          url: `${BASE_URL}/login/kakao`,
          headers: {
            'Authorization-Code': code,
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
*/
  return (
    <div css={Container}>
      <button onClick={getToken}>token</button>
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
