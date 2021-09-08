import React from 'react'
import { css } from '@emotion/react'
import { useEffect } from 'react'
import { BASE_URL } from 'config'
import api from 'api'
import { getTokenSourceMapRange } from 'typescript'

const KakaoLoginPage: React.FC = () => {
  const code = new URL(window.location.href).searchParams.get('code')

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
      {getToken()}
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
