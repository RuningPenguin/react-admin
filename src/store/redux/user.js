import {getToken, setToken} from "@/tools";
import * as types from "../action-types";

let initState = {
  userInfo: {},
  token: getToken()

};

const user = (state = initState, {type, payload}) => {
  switch (type) {
    case types.SET_USER_INFO:
      return {...state, userInfo: payload};
    case types.SET_USER_TOKEN:
      setToken(payload); // 储存到缓存中
      return {...state, token: payload};
    case types.RESET_USER_INFO:
      setToken(payload); // 储存到缓存中
      return {...state, userInfo: {}, token: payload};
    default:
      return state;
  }
};
export default user;