import * as types from "../action-types";
import {getUserInfo_api} from "@/api/user";

const setUserInfo = payload => ({type: types.SET_USER_INFO, payload})

const setUserToken = payload => ({type: types.SET_USER_TOKEN, payload})


export const resetUserInfo = payload => ({type:types.RESET_USER_INFO})

export const getUserInfo = payload => async dispatch => {

  let res = await getUserInfo_api();
  dispatch(setUserToken(res.token));
  dispatch(setUserInfo(res));
  return res;
};


