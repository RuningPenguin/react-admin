import React from "react";
import {connect} from "react-redux";
import {HashRouter, Redirect, Route, Switch} from "react-router-dom";
import Login from "@/pages/login";
import Main from "@/layouts"

class Router extends React.Component {

  render() {
    const {token} = this.props;
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/login" component={Login}/>
          <Route
            path="/"
            render={() => {
              if (!token) {
                return <Redirect to="/login"/>;
              } else {return <Main/>;}
            }}
          />
        </Switch>
      </HashRouter>
    );
  }
}

const mapState2props = (state) => ({
  token: state.user.token
});

export default connect(mapState2props)(Router);