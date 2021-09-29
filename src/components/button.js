import React from "react";

const Button = ({ name, mode, onClick, value }) => {
  return (
    <button className={mode} value={value} onClick={onClick}>
      {name}
    </button>
  );
};

export default Button;
