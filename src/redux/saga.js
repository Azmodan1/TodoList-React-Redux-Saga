import { put, takeEvery, delay, all } from 'redux-saga/effects'
import { businessDone, deleteBusiness, hideAlert, showAlert } from './actions'
import { ASYNC_DELETE_BUSINESS, Alert_Async } from './types'

function* AsyncDeleteBusiness(action) {
  const { payload } = action
  yield put(businessDone(payload))
  yield delay(1000)
  yield put(deleteBusiness(payload))
}

function* AsyncAlert(action) {
  yield put(showAlert(action.payload))
  yield delay(3000)
  yield put(hideAlert())
}

export function* watcher() {
  yield takeEvery(ASYNC_DELETE_BUSINESS, AsyncDeleteBusiness)
}

export function* watcherAlert() {
  yield takeEvery(Alert_Async, AsyncAlert)
}

export function* rootSaga() {
  yield all([watcher(), watcherAlert()])
}


