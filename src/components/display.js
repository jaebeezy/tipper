import React from "react";

import { round } from "../helpers/round";

const Display = ({ label, amount, people }) => {
  return (
    <div className="display-container">
      <div className="per-person">
        <h5 className="display-header">{label}</h5>
        <h6>/ person</h6>
      </div>
      <div>
        <h1 className="amount-header">${round(amount / people)}</h1>
      </div>
    </div>
  );
};

export default Display;
