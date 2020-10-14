import {
  GET_ALL_PIZZA_LOADED,
  LOGIN, LOGOUT
} from "./types";

const initialState = {
  token: null,
  userId: null,
  pizza: []
}

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        token: action.payload.token,
        userId: action.payload.userId
      }
    case LOGOUT:
      localStorage.removeItem('userData')
      return {
        ...state,
        token: null,
        userId: null
      }
    case GET_ALL_PIZZA_LOADED:
      return {
        ...state,
        pizza: action.payload
      }
    default:
      return state
  }
}
