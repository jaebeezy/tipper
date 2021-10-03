import React from "react";

import { round } from "../helpers/round";

const Display = ({ name, label, amount, people }) => {
  return (
    <div className="display-container">
      <div className="per-person">
        <h5 className="display-header">{label}</h5>
        <h6>/ person</h6>
      </div>
      <div className={name}>
        <h1 className="amount-header">
          {amount ? `$${round(amount / people)}` : "$0.00"}
        </h1>
      </div>
    </div>
  );
};

export default Display;
