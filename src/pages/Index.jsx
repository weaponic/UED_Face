import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UEDHeader from "./UEDHeader";

import Resource from "./resource/Resource";
import Community from "./community/Community";
import Home from "./home";
import NotFound from "./error/NotFound";
import { Layout } from "antd";
const { Footer, Content } = Layout;

class RouterPage extends Component {
  render() {
    return (
      <Layout>
        <UEDHeader />
        <Content className="">
          <Router>
            <Switch>
              <Route path="/resource">
                <Resource />
              </Route>
              <Route path="/community">
                <Community />
              </Route>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </Router>
        </Content>
        <Footer className="ued-footer">
          <span>
            ©2020&nbsp;<a href="https://motion.ant.design">UED FiberHome</a>
            &nbsp;All Rights Reserved
          </span>
        </Footer>
      </Layout>
    );
  }
}

export default RouterPage;
