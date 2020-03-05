import React, { Component } from "react";
import { Link } from "react-router-dom";

class NotFound extends Component {
  render() {
    return (
      <div>
        <img
          alt="404 Not Found"
          src={require("../../assets/images/404img.png")}
          style={{ width: "300px", height: "200px" }}
        ></img>
        你进入到神秘的次元中了。
        <button>
          <Link to="/">去首页看看</Link>
        </button>
      </div>
    );
  }
}

export default NotFound;
