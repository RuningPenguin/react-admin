import React from "react";
import {connect} from "react-redux";
import {MenuFoldOutlined, MenuUnfoldOutlined} from "@ant-design/icons";
import {UpdateSideBar_State} from "@/store/action";
import "./index.less";

const Hamburger = (props) => {
  const {sidebarState, UpdateSideBar_State} = props;
  return (
    <div className="hamburger-container">
      {
        !sidebarState ?
        <MenuFoldOutlined onClick={UpdateSideBar_State}/> :
        <MenuUnfoldOutlined onClick={UpdateSideBar_State}/>
      }

    </div>
  );
};

export default connect((state) => state.app, {UpdateSideBar_State})(Hamburger);
