import React from "react";
import PropTypes from "prop-types";

const Button = props =>
  <div className="button" onClick={props.onClick}>
    {props.children}
  </div>;

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.any
};

export default Button;
