import * as types from "../action-types";
import settingConfig from "@/config/defauleSetting.config";

const {showSettings, sidebarLogo, tagsView, fixedHeader} = settingConfig;


const initState = {showSettings, sidebarLogo, tagsView, fixedHeader};

const setting = (state = initState, action) => {

  const {type, key, value} = action;
  switch (type) {
    case types.UPDATE_SETTING:
      if (state.hasOwnProperty(key)) {
        return {...state, [key]: value};
      }
      return state;
    default:
      return state;
  }
};

export default setting;