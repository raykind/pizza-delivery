import {
  ADD_TO_CART, CLEAR_CART,
  GET_ALL_PIZZA_LOADED,
  LOGIN, LOGOUT, REMOVE_FROM_CART,
} from "./types";


export function login(data) {
  return {
    type: LOGIN,
    payload: data
  }
}

export function logout() {
  return {
    type: LOGOUT
  }
}

export function getAllPizza(request) {
  return async dispatch => {
    try {
      const token = JSON.parse(localStorage.getItem('userData')).token

      setTimeout(async () => {
        const data = await request('/api/menu/getAllPizza', 'GET', null, {
          Authorization: 'Bearer ' + token
        })

        dispatch({ type: GET_ALL_PIZZA_LOADED, payload: data })
      }, 2000)
    } catch (e) {
      console.log(e)
    }
  }
}

export function addToCart(pizza) {
  return {
    type: ADD_TO_CART,
    payload: pizza
  }
}

export function removeFromCart(pizza) {
  return {
    type: REMOVE_FROM_CART,
    payload: pizza
  }
}
export function clearCart() {
  return {
    type: CLEAR_CART
  }
}

