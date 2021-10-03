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
        min={type === "number" ? 1 : 0}
        placeholder="0.00"
      />
    </div>
  );
};

export default InputBar;
