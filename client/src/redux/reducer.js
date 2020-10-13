import {LOGIN} from "./types";

const initialState = {
  token: null,
  userId: null,
  loading: false
}

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        token: action.payload.token,
        userId: action.payload.userId
      }
    default:
      return state
  }
}
