import {
  GET_ALL_PIZZA_LOADED,
  LOGIN, LOGOUT,
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
