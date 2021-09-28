import React from "react";

const Button = ({ value, mode }) => {
  return <button className={mode}>{value}</button>;
};

export default Button;
