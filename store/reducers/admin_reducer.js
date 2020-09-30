import { UPD_SITE } from "./types"

export const siteReducer = (state = null, action) => {
  switch (action.type) {
    case UPD_SITE: {
      return { ...state, site: action.payload }
    }
    default:
      return state
  }
}
