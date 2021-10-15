import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { css } from '@emotion/react'

import { ButtonDefault, FONT_SIZE_STYLE } from 'styles/GlobalStyles'
import { RecentOrders } from 'config'
import api from 'api'

const SentListPage: React.FC = () => {
  const history = useHistory()
  const [orders, setOrders] = useState<RecentOrders[]>([])

  useEffect(() => {
    const userId = localStorage.getItem('user_id')
    const accessToken = localStorage.getItem('access_token') || ''

    const fetchSentList = async () => {
      try {
        const res = await api.get(`/users/${userId}/orders`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        setOrders(res.data.data)
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
        <div key={order.id}>{`${order.receiver.name} ${order.status}`}</div>
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
