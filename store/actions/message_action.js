import axios from "axios"
import { SEND_MESSAGE, CLEAR_MESSAGE, UPD_SITE } from "../reducers/types"
import Cookies from "js-cookie"

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

export function updateSite(data) {
  const request = axios({
    method: "PATCH",
    url: `${URL}/api/v1/site`,
    data: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${Cookies.getJSON("x-jwt")}`,
    },
  }).then((response) => response.data)
  return { type: UPD_SITE, payload: request }
}
