import React, { useState } from "react";

const InputBar = ({ label }) => {
  const [number, setNumber] = useState(0);

  return (
    <div>
      <h4>{label}</h4>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
    </div>
  );
};

export default InputBar;
