import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { css } from '@emotion/react'
import axios from 'axios'

import { ButtonDefault, FONT_SIZE_STYLE } from 'styles/GlobalStyles'
import { BASE_URL, Iorder } from 'config'

const SentListPage: React.FC = () => {
  const history = useHistory()
  const [orders, setOrders] = useState<Iorder[]>([])

  useEffect(() => {
    const userId = localStorage.getItem('user_id')
    //const nickname = localStorage.getItem('nickname')
    const accessToken = localStorage.getItem('access_token')

    const fetchSentList = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/users/${userId}/orders`)
        //console.log(res)
        setOrders(res.data.order)
        console.log(orders)
      } catch (e) {
        console.log('error')
      }
    }

    fetchSentList()
  }, [])

  return (
    <div css={Container}>
      <button css={MainMenuButton} onClick={() => history.push(`/main`)}>
        {`<`}
      </button>
      {orders.map((order) => (
        <div key={order.id}>{order.order_date}</div>
      ))}
    </div>
  )
}

export default SentListPage

const Container = css`
  width: 100%;
  margin: 0 auto;
  max-width: 768px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  font-size: ${FONT_SIZE_STYLE.large};
`
const MainMenuButton = css`
  ${ButtonDefault}
  font-size: ${FONT_SIZE_STYLE.large};
  background-color: #4a847a;
  color: white;
  margin: 10px;
  padding: 10px;
  border-radius: 6px;
`
