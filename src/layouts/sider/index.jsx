import React from "react";
import {connect} from "react-redux";
import {Layout} from "antd";
import Logo from "./logo";
import Menu from "./menu";
const {Sider} = Layout;

const LayoutSider = (props) => {
  const {sidebarState, sidebarLogo} = props;
  return (
    <Sider
      collapsible
      collapsed={sidebarState}
      trigger={null}
      style={{zIndex: "10"}}
    >
      {sidebarLogo && <Logo/>}
      <Menu/>
    </Sider>
  );
};

const mapStateToProps = (state) => {
  return {
    ...state.app,
    ...state.setting
  };
};
export default connect(mapStateToProps)(LayoutSider);
