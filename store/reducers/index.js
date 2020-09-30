import { combineReducers } from "redux"
import { userReducer } from "./user_reducer"
import { messageReducer } from "./msg_reducer"
import { siteReducer } from "./admin_reducer"

const rootReducer = combineReducers({
  user: userReducer,
  msg: messageReducer,
  admin: siteReducer,
})

export default rootReducer
