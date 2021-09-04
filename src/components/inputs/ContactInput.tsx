import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from 'store/configureStore'
import { setOrderInfo } from 'store/actions/order'

const ContactInput: React.FC = () => {
  const order = useSelector((state: RootState) => state.order)
  const dispatch = useDispatch()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setOrderInfo({ key: e.target.name, value: e.target.value }))
  }

  return <input type="text" placeholder="이름" onChange={handleChange} />
}

export default ContactInput
