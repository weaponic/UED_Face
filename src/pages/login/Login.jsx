import React, { Component } from "react";
import { Form, Input, Button } from "antd";
import "./login.less";
class Login extends Component {
  constructor() {
    super();
    this.state = {
      userName: "",
      password: ""
    };
  }

  render() {
    return (
      <div className="page-container">
        <Form initialValues={{ remember: true }} className="login-form">
          <img
            style={{
              margin: "56px 0 0"
            }}
            src={require("../../assets/images/logo-login.png")}
            alt=""
          />
          <p
            style={{
              fontSize: "28px",
              color: "rgba(0, 0, 0, 0.7)",
              margin: "32px 0"
            }}
          >
            上海研发中心资源共享平台
          </p>

          <div>
            <p>
              <label htmlFor="userName">账号</label>
            </p>
            <Form.Item
              name="username"
              rules={[{ required: true, message: "请输入账号!" }]}
            >
              <Input
                placeholder="请输入账号"
                id="userName"
                onChange={this.onInputChanged.bind(this, "userName")}
              />
            </Form.Item>
          </div>
          <div>
            <p>
              <label htmlFor="password">密码</label>
            </p>
            <Form.Item
              name="password"
              rules={[{ required: true, message: "请输入密码!" }]}
            >
              <Input
                type="password"
                placeholder="请输入密码"
                onChange={this.onInputChanged.bind(this, "password")}
                value={this.state.password}
              />
            </Form.Item>
          </div>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              onClick={this.onSubmit.bind(this)}
            >
              登录
            </Button>
          </Form.Item>
          <p style={{ color: "#ccc", fontSize: "14px" }}>
            无法登录？请联系管理员。
          </p>
        </Form>
      </div>
    );
  }

  onInputChanged(field, e) {
    const { value } = e.target;
    this.setState({
      [field]: value
    });
  }

  onSubmit() {
    const { userName, password } = this.state;
    console.log(userName, password);
    if (userName && password) {
      
    }
  }
}

export default Login;
