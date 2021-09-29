import React from "react";

const Display = ({ label, amount, people }) => {
  return (
    <div className="display-container">
      <div className="per-person">
        <h5 className="display-header">{label}</h5>
        <h6>/ person</h6>
      </div>
      <div>
        <h1 className="amount-header">${amount / people}</h1>
      </div>
    </div>
  );
};

export default Display;
