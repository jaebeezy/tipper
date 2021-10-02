import React from "react";

import { round } from "../helpers/round";

const Display = ({ label, amount, people }) => {
  // const displayHelper = () => {
  //   let answer = round(amount / people);
  //   console.log(answer);

  //   if (answer === "NaN") {
  //     return "N/A";
  //   } else {
  //     return `$${answer}`;
  //   }
  // };

  return (
    <div className="display-container">
      <div className="per-person">
        <h5 className="display-header">{label}</h5>
        <h6>/ person</h6>
      </div>
      <div class="amount-container">
        <h1 className="amount-header">${round(amount / people)}</h1>
      </div>
    </div>
  );
};

export default Display;
