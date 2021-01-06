import { ADD_BUSINESS, DELETE_BUSINESS, COMPLETE_BUSINESS } from './types'

export const initialState = {
  affairs: [
    { id: 1, done: false, title: 'Купить хлеб' },
    { id: 2, done: false, title: 'Купить масло' },
    { id: 3, done: false, title: 'Купить молоко' },
  ],
}

export const TodoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BUSINESS:
      return {
        ...state,
        affairs: [...state.affairs, action.payload],
      }
    case DELETE_BUSINESS:
      return {
        ...state,
        affairs: [
          ...state.affairs.filter((affair) => affair.id !== action.payload),
        ],
      }
    case COMPLETE_BUSINESS:
      return {
        ...state,
        affairs: state.affairs.map((affair) => ({
          ...affair,
          done: (affair.id === action.payload) !== affair.done,
        })),
      }
    default:
      return state
  }
}
