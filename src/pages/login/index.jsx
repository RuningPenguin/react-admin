import React from "react";
import {connect} from "react-redux";
import {Button} from "antd";
import {getUserInfo} from "@/store/action/user";

const Login = (props) => {
  const {dispatch, history} = props;
  // 登陆方法
  const login = async () => {
    console.log(123);
    let res = await dispatch(getUserInfo());
    if (res.token) {
      history.push({pathname: "/home"});
    }
  };

  return (
    <>
      <Button type="primary" onClick={login}>LOGIN</Button>
    </>
  );
};

const mapState2Props = (state) => ({
  state
});

export default connect(mapState2Props)(Login);