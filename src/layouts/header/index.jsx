import React, {useEffect} from "react";
import {connect} from "react-redux";
import {Avatar, Dropdown, Layout, Menu, Modal} from "antd";
import {withRouter} from "react-router-dom";
import {getUserInfo, logout} from "@/store/action";
import Settings from "@/components/q-setting";
import Hamburger from "@/components/q-hamburger";
import FullScreen from "@/components/fullScreen";
import BreadCrumb from "@/components/q-breadCrumb";
import {CaretDownOutlined} from "@ant-design/icons";
import "./index.less";

const {Header} = Layout;


const LayoutHeader = (props) => {
  const {
    token,
    userInfo: {adv, name},
    sidebarState,
    showSettings,
    fixedHeader, history,
    dispatch
  } = props;

  useEffect(() => {
    token && dispatch(getUserInfo());
  }, [token, dispatch]);


  // 推出登陆
  const handleLogout = () => {
    Modal.confirm({
      title: "注销",
      content: "确定要退出系统吗?",
      okText: "确定",
      cancelText: "取消",
      onOk: () => {
        logout();
        history.replace({pathname: "/login"});
      }
    });
  };

  const onClick = ({key}) => {
    switch (key) {
      case "home":
        history.push({pathname: "/home"});
        break;
      case "logout":
        handleLogout(token);
        break;
      default:
        break;
    }
  };

  const items = [
    {label: "首页", key: "home"},
    {label: "2"},
    {type: "divider"},
    {label: "注销", key: "logout"}
  ];
  //
  const menu = (
    <Menu onClick={onClick} items={items}/>
  );


  const computedStyle = () => {
    let styles;
    if (fixedHeader) {
      if (sidebarState) {
        styles = {
          width: "calc(100% - 80px)"
        };
      } else {
        styles = {
          width: "calc(100% - 200px)"
        };
      }
    } else {
      styles = {
        width: "100%"
      };
    }
    return styles;
  };


  return (
    <>
      {/* 这里是仿照antd pro的做法,如果固定header，
      则header的定位变为fixed，此时需要一个定位为relative的header把原来的header位置撑起来 */}
      {fixedHeader ? <Header/> : null}
      <Header
        style={computedStyle()}
        className={fixedHeader ? "fix-header" : ""}
      >
        <Hamburger/>
        <BreadCrumb/>
        <div className="right-menu">
          <FullScreen/>
          {showSettings ? <Settings/> : null}
          <div className="dropdown-wrap">
            <Dropdown overlay={menu}>
              <div>
                <span className="mr-10">{name}</span>
                <Avatar shape="square" size="medium" src={adv}/>
                <CaretDownOutlined style={{color: "rgba(0,0,0,.3)"}}/>
              </div>
            </Dropdown>
          </div>
        </div>
      </Header>
    </>
  );
};

const mapState2props = state => ({
  ...state.app,
  ...state.user,
  ...state.setting
});

export default connect(mapState2props)(withRouter(LayoutHeader));