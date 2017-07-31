import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

class Navigation extends React.Component {
  componentDidMount() {
    console.log("navigation mounted......");
  }

  render() {
    console.log("navigationProps:", this.props);
    return (
      <div>
        <Link to="/customerList">客户列表</Link>
        <br />
        <Link to="/userList">用户列表</Link>
        <br />
        <button
          onClick={() => {
            localStorage.removeItem("isLogin");
            this.props.history.push("/login");
          }}
        >
          log out
        </button>
      </div>
    );
  }
}

Navigation.propTypes = {
  history: PropTypes.any
};

export default Navigation;
