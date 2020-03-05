import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";
const { Header } = Layout;
const { Item } = Menu;



export class UEDHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentRoute: ["/"]
    };
  }
  componentDidMount() {
    let {pathname} = window.location;
    this.setState({
      currentRoute: [pathname]
    })
  }
  render() {
    return (
      <Header className="ued-header">
        <Link to="/">
          <div className="logo"></div>
        </Link>
        <Menu
          className="menu-wrapper"
          mode="horizontal"
          defaultSelectedKeys={this.state.currentRoute}
          style={{ lineHeight: "62px" }}
        >
          <Item key="/community">
            <Link to="/resource">资源</Link>
          </Item>
          <Item key="/resource">
            <Link to="/community">社区</Link>
          </Item>
          <Item key="/contactUs">
            <Link to="/contactUs">我们</Link>
          </Item>
        </Menu>
      </Header>
    );
  }
}

export default UEDHeader;
