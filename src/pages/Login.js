import React from "react";
import PropTypes from "prop-types";
import { Button } from "antd";

class Login extends React.Component {
  handleLogin = () => {
    console.log("the login button clicked......");
    console.log("this:", this);
    localStorage.setItem("isLogin", "1");
    this.props.history.push("/userList");
  };

  render() {
    return (
      <div>
        <h2>the login page ......</h2>
        <Button onClick={this.handleLogin}>login</Button>
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.any
};

export default Login;
