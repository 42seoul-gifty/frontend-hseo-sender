import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { css } from '@emotion/react'

import { FONT_SIZE_STYLE, FlexCenter, FlexColCenter } from 'styles/GlobalStyles'
import { SelectType } from 'config'
import { RootState } from 'store/configureStore'
import { showModal, SHOW_WARNING_MODAL } from 'store/actions/modal'
import { setPageInfo } from 'store/actions/page'
import Select from 'components/inputs/Select'
import api from 'api'

type Selections = {
  genders: SelectType[]
  ages: SelectType[]
  prices: SelectType[]
}
const GiftInfo: React.FC = () => {
  const order = useSelector((state: RootState) => state.order)
  const dispatch = useDispatch()

  const [selections, setSelections] = useState<Selections>({
    genders: [],
    ages: [],
    prices: [],
  })

  const accessToken: string = localStorage.getItem('access_token') || ''

  useEffect(() => {
    const fetchSelections = async (url: string) => {
      try {
        const res = await api.get(`/${url}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        const data = res.data.data
        setSelections((prev) => ({ ...prev, [url]: data }))
      } catch (e) {
        console.log(e)
      }
    }

    fetchSelections('ages')
    fetchSelections('prices')
    fetchSelections('genders')
  }, [])

  const handleNext = () => {
    if (order.age.length === 0 || !order.price || order.gender.length === 0) {
      dispatch(showModal(SHOW_WARNING_MODAL))
      return
    }
    dispatch(setPageInfo('overall'))
  }

  return (
    <div css={Container}>
      <div>선물 정보를 알려주세요</div>
      <div>성별, 나이, 금액대를 입력해주세요</div>

      <section css={SelectionSection}>
        <Select keyword="gender" selections={selections.genders} />
        <Select keyword="age" selections={selections.ages} />
        <Select keyword="price" selections={selections.prices} />
      </section>

      <section css={BeforeNextButtonSection}>
        <button type="button" onClick={() => dispatch(setPageInfo('receiver'))}>
          이전으로
        </button>
        <button type="button" onClick={handleNext}>
          다음단계
        </button>
      </section>
    </div>
  )
}

export default GiftInfo

const Container = css`
  width: 100%;
  margin: 0 auto;
  max-width: 768px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  font-size: ${FONT_SIZE_STYLE.large};
  margin-top: 40px;
`
const SelectionSection = css`
  ${FlexColCenter}
  margin-top: 40px;
`
const BeforeNextButtonSection = css`
  ${FlexCenter}
  margin-top: 30px;
`
