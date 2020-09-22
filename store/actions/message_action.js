import axios from "axios"
import { SEND_MESSAGE, CLEAR_MESSAGE } from "../reducers/types"

const URL = "http://localhost:3000"

export function sendMessage(data) {
  const request = axios({
    method: "POST",
    url: `${URL}/api/v1/messages`,
    data: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
  }).then((response) => response.data)

  return {
    type: SEND_MESSAGE,
    payload: request,
  }
}

export function clearMessage() {
  return {
    type: CLEAR_MESSAGE,
    payload: null,
  }
}
