import React from "react";
import {Layout} from "antd";
import {connect} from "react-redux";
import LayoutHeader from "@/layouts/header";
import RightPanel from "@/layouts/rightPanel";
import TagsView from "@/layouts/tagsView";
import Sider from "./sider";
import Content from "@/layouts/content"


const Main = (props) => {
  const {tagsView} = props;


  return (
    <Layout>
      <Sider/>
      <Layout style={{overflow:'auto'}}>
        <LayoutHeader/>
        {tagsView && <TagsView/>}
        <Content/>
        <RightPanel/>
      </Layout>
    </Layout>
  );
};


export default connect(state => state.setting)(Main);
;