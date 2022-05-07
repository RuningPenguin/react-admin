import React from "react";
import {connect} from "react-redux";
import {Tooltip} from "antd";
import {SettingOutlined} from "@ant-design/icons";
import {updateSetting_State} from "@/store/action";
import "./index.less";

const Settings = (props) => {
  const {updateSetting_State} = props;
  return (
    <div className="settings-container">
      <Tooltip placement="bottom" title="系统设置">
        <SettingOutlined onClick={updateSetting_State}/>
      </Tooltip>
    </div>
  );
};

export default connect(null, {updateSetting_State})(Settings);
