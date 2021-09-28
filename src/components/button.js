import React from "react";

const Button = ({ value, mode }) => {
  return (
    <div>
      <button className={mode}>{value}</button>
    </div>
  );
};

export default Button;
