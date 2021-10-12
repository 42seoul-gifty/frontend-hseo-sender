import { AxiosResponse } from 'axios'
import { put, call } from '@redux-saga/core/effects'
import { getSelection, setSelection } from 'store/actions/selection'
import { requestGetSelection } from 'store/api'

export function* handleGetChoice(action: ReturnType<typeof getSelection>) {
  try {
    const url = action.payload
    const response: AxiosResponse = yield call(requestGetSelection, url)
    const { data } = response
    yield put(setSelection(data.data))
  } catch (error) {
    console.log(error)
  }
}
