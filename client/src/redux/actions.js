import {LOGIN} from "./types";

export function login(data) {
  return {
    type: LOGIN,
    payload: data
  }
}
