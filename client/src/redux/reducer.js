import {
  ADD_TO_CART, CLEAR_CART,
  GET_ALL_PIZZA_LOADED,
  LOGIN, LOGOUT, REMOVE_FROM_CART
} from "./types";

const initialState = {
  token: null,
  userId: null,
  pizza: [],
  cart: []
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
    case ADD_TO_CART:
      const newExtendedCart = [...state.cart, action.payload]
      localStorage.setItem('cartPizzaIds', JSON.stringify(newExtendedCart.map(item => item._id)))
      return {
        ...state,
        cart: newExtendedCart
      }
    case REMOVE_FROM_CART:
      const newCollapsedCart = state.cart.filter(item => item._id !== action.payload._id)
      localStorage.setItem('cartPizzaIds', JSON.stringify(newCollapsedCart.map(item => item._id)))
      return {
        ...state,
        cart: newCollapsedCart
      }
    case CLEAR_CART:
      localStorage.removeItem('cartPizzaIds')
      return {
        ...state,
        cart: []
      }
    default:
      return state
  }
}
