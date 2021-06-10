import { languageTypes } from "../types"

const initState = { locale: "en", isRtl: false }

const languageReducer = (state = initState, action) => {
  switch (action.type) {
    case languageTypes.CHANGE_LANGUAGE: {
      return {
        ...state,
        locale: action.payload,
      }
    }

    default:
      return state
  }
}

export default languageReducer