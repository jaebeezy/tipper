import React from "react";

const InputBar = ({ label, mode, type, value, onChange }) => {
  const helperFunction = (value) => {
    if (type === "number") {
      onChange(value);
    } else {
      onChange(value);
    }
  };

  return (
    <div>
      <h4>{label}</h4>
      <input
        className={mode}
        type={type}
        value={value}
        onChange={(e) => helperFunction(e.target.value)}
        min={type === "number" ? 1 : 0}
      />
    </div>
  );
};

export default InputBar;
