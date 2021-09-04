import React from 'react'
import { useDispatch } from 'react-redux'
import { hideModal } from 'store/actions/modal'
import { setOrderInfo } from 'store/actions/order'

interface IProps {
  keyword: string
  selections: string[]
}

const Select: React.FC<IProps> = ({ keyword, selections }) => {
  const dispatch = useDispatch()
  console.log(keyword)
  return (
    <>
      {selections.map((option) => (
        <div>
          <button
            onClick={() =>
              dispatch(setOrderInfo({ key: keyword, value: option }))
            }
          >
            {option}
          </button>
        </div>
      ))}
      {keyword !== 'gender' && (
        <button onClick={() => dispatch(hideModal())}>선택 완료</button>
      )}
    </>
  )
}

export default Select
