import {
  ADD_BUSINESS,
  ASYNC_DELETE_BUSINESS,
  DELETE_BUSINESS,
  COMPLETE_BUSINESS,
  SHOW_ALERT,
  HIDE_ALERT,
} from './types'

export const addBusiness = (affair) => ({
  type: ADD_BUSINESS,
  payload: affair,
})

export const deleteBusiness = (id) => ({
  type: DELETE_BUSINESS,
  payload: id,
})

export const completeBusiness = (id) => ({
  type: ASYNC_DELETE_BUSINESS,
  payload: id,
})

export const businessDone = (id) => ({
  type: COMPLETE_BUSINESS,
  payload: id,
})

export const showAlert = (text) => ({
  type: SHOW_ALERT,
  payload: text,
})

export const hideAlert = () => ({
  type: HIDE_ALERT,
})
