import { put, takeEvery, delay } from 'redux-saga/effects'
import { businessDone, deleteBusiness } from './actions'
import { ASYNC_DELETE_BUSINESS } from './types'

function* AsyncDeleteBusiness(action) {
  const { payload } = action
  yield put(businessDone(payload))
  yield delay(1000)
  yield put(deleteBusiness(payload))
}

export function* watcher() {
  yield takeEvery(ASYNC_DELETE_BUSINESS, AsyncDeleteBusiness)
}
