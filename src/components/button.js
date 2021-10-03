import React from "react";

const Button = ({ name, mode, onClick, value, disabled }) => {
  return (
    <button
      className={mode}
      value={value}
      onClick={onClick}
      disabled={disabled}
    >
      {name}
    </button>
  );
};

export default Button;
