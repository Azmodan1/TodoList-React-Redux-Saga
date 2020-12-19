import { ADD_BUSINESS, COMPLETE_BUSINESS, DELETE_BUSINESS } from './types'

export const initialState = {
  affairs: [
    { id: 1, done: false, tittle: 'Взять Лешрака' },
    { id: 2, done: false, tittle: 'Пойти на мид' },
    { id: 3, done: false, tittle: 'Выиграть мид' },
  ],
}

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BUSINESS:
      console.log(action.payload)
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
          done: affair.id === action.payload !== affair.done 
        })),
      }
    default:
      return state
  }
}

// case COMPLETE_BUSINESS:
//       return {
//         ...state,
//         affairs: state.affairs.map((affair) => ({
//           ...affair,
//           done: affair.id === action.payload.id,

//         })),
//       }
// const CompleteAction = (id) => {
//   setAffairs(
//     affairs.map((affair) => {
//       if (affair.id === id) {
//         affair.done = !affair.done
//       }
//       return affair
//     }),
//     setTimeout(deleteItem, 1000, id)
//   )
// }

// affairs: [state.affairs.filter((affair) => affair.id !== affair.id)],
