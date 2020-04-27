import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Index from "./Index";
import Login from "./login/Login";
import Signin from "./login/Signin";

class RouterPage extends Component {
  state = {
    isLogedIn: true
  };
  render() {
    return (
      <Router forceRefresh={true}>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signin">
            <Signin />
          </Route>
          <Route
            path="/"
            render={location =>
              this.state.isLogedIn ? (
                <Index />
              ) : (
                <Redirect to="/login"></Redirect>
              )
            }
          ></Route>
        </Switch>
      </Router>
    );
  }
}

export default RouterPage;
