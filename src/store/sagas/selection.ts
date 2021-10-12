import { AxiosResponse } from 'axios'
import { put, call } from '@redux-saga/core/effects'
import {
  getSelection,
  SelectionInfo,
  setSelection,
} from 'store/actions/selection'
import { requestGetSelection } from 'store/api'

export function* handleGetSelection(action: ReturnType<typeof getSelection>) {
  try {
    const url = action.payload
    const response: AxiosResponse = yield call(requestGetSelection, url)
    const { data } = response
    const info: SelectionInfo = {
      selection: data.data,
      type: url,
    }
    yield put(setSelection(info))
  } catch (error) {
    console.log(error)
  }
}
