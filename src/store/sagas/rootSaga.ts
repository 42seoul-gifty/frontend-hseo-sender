import { takeLatest } from '@redux-saga/core/effects'
import { GET_SELECTION } from 'store/actions/selection'
import { handleGetSelection } from './selection'

export function* watcherSaga() {
  yield takeLatest(GET_SELECTION, handleGetSelection)
}
