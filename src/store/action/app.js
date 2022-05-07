import * as types from "../action-types";


export const UpdateSideBar_State= (bl) => {
  return {
    type: types.APP_SIDEBAR_STATE,
    bl
  };
};

export const updateSetting_State = () => {
  return {
    type: types.APP_SETTING_STATE
  };
};