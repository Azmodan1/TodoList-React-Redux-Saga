import { ADD_BUSINESS, COMPLETE_BUSINESS, DELETE_BUSINESS } from './types'

export const addBusiness = (affair) => {
  return {
    type: ADD_BUSINESS,
    payload: affair,
  }
}

export const deleteBusiness = (id) => {
  return {
    type: DELETE_BUSINESS,
    payload: id,
  }
}

export const competeBusiness = (id) => {
  return {
    type: COMPLETE_BUSINESS,
    payload: id,
  }
}
