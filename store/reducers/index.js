import { combineReducers } from "redux"
import { userReducer } from "./user_reducer"
import { messageReducer } from "./msg_reducer"

const rootReducer = combineReducers({
  user: userReducer,
  msg: messageReducer,
})

export default rootReducer
