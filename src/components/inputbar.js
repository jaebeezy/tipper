import React from "react";

const InputBar = ({ label, mode, type, value, onChange }) => {
  return (
    <div>
      <h4>{label}</h4>
      <input
        className={mode}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default InputBar;
