// import { setUserToken, resetUser } from "./user";
// import { reqLogin, reqLogout } from "@/api/login";
// import { setToken, removeToken } from "@/utils/auth";
// import {getUserInfo_api} from "@/api/user";


// export const login = (username, password) => async (dispatch) => {
//   console.log('login');
//   getUserInfo_api()
//   return true
//   // return new Promise((resolve, reject) => {
//   //   reqLogin({ username: username.trim(), password: password })
//   //     .then((response) => {
//   //       const { data } = response;
//   //       if (data.status === 0) {
//   //         const token = data.token;
//   //         dispatch(setUserToken(token));
//   //         setToken(token);
//   //         resolve(data);
//   //       } else {
//   //         const msg = data.message;
//   //         reject(msg);
//   //       }
//   //     })
//   //     .catch((error) => {
//   //       reject(error);
//   //     });
//   // });
// };

export const logout = (token) => (dispatch) => {
  console.log('logout');
  return true
  // return new Promise((resolve, reject) => {
  //   reqLogout(token)
  //     .then((response) => {
  //       const { data } = response;
  //       if (data.status === 0) {
  //         dispatch(resetUser());
  //         removeToken();
  //         resolve(data);
  //       } else {
  //         const msg = data.message;
  //         reject(msg);
  //       }
  //     })
  //     .catch((error) => {
  //       reject(error);
  //     });
  // });
};
