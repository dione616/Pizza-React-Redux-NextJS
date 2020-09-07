import { createStore, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import promiseMiddleware from "redux-promise"
import Reducers from "./reducers"

const exampleInitialState = {
  user: [],
}

export function initializeStore(initialState = exampleInitialState) {
  return createStore(Reducers, initialState, composeWithDevTools(applyMiddleware()))
}
