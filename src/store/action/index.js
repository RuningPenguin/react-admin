import {getUserInfo, resetUserInfo} from "./user";
import {
  actionUpdateNAV_TITLE,
  actionUpdateSHOW_FOOTER,
  actionUpdateSHOW_NAV
} from "./glob";
import {updateSetting_State, UpdateSideBar_State} from "./app";
import {updateSetting} from "./setting";
import {logout} from "./auth";
import {addTag, emptyTaglist, deleteTag, closeOtherTags } from "./tagsView";
import { addBug } from "./monitor";

const login = getUserInfo;


export {
  getUserInfo, resetUserInfo,
  updateSetting_State, UpdateSideBar_State,
  updateSetting,
  actionUpdateSHOW_FOOTER, actionUpdateSHOW_NAV, actionUpdateNAV_TITLE,
  logout, login,
  addTag, emptyTaglist, deleteTag, closeOtherTags,
  addBug
};