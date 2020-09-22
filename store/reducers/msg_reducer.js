import { SEND_MESSAGE, CLEAR_MESSAGE } from "./types"

export const messageReducer = (state = null, action) => {
  switch (action.type) {
    case SEND_MESSAGE: {
      return { ...state, sendEmail: action.payload }
    }
    case CLEAR_MESSAGE: {
      return { ...state, sendEmail: action.payload }
    }
    default:
      return state
  }
}
