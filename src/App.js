import React from "react";
import {Provider} from "react-redux";
import {ConfigProvider} from "antd";
import zhCN from "antd/es/locale/zh_CN";
import Router from "@/router";
import store from "@/store";
import {UpdateSideBar_State} from "./store/action/";


export default class App extends React.Component {


  render() {
    if (document.body.clientWidth <= 740) {
      store.dispatch(UpdateSideBar_State(true));
    }
    window.addEventListener("resize", function () {
      if (document.body.clientWidth <= 740) {
        store.dispatch(UpdateSideBar_State(true));
      } else {
        store.dispatch(UpdateSideBar_State(false));
      }
    });

    return (
      <ConfigProvider locale={zhCN}>
        <Provider store={store}>
          <Router/>
        </Provider>
      </ConfigProvider>
    );
  }
}