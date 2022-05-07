import * as types from "../action-types";

const initState = {
  sidebarState: false,
  settingPanelVisible: false
};


export default function app(state = initState, {type, bl}) {
  switch (type) {
    case types.APP_SIDEBAR_STATE:
      console.log(typeof bl, "redux");
      return {
        ...state,
        sidebarState: typeof bl === "boolean" ? bl : !state.sidebarState
      };
    case types.APP_SETTING_STATE:
      return {
        ...state,
        settingPanelVisible: !state.settingPanelVisible
      };
    default:
      return state;
  }
}
