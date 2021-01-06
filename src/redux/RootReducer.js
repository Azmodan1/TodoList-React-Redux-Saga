import { combineReducers } from 'redux'
import { appReducer } from './AppReducer'
import { TodoReducer } from './TodoReducer'

export const rootReducer = combineReducers({
  todo: TodoReducer,
  app: appReducer,
})

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
