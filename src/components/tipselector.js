import React from "react";

import Button from "./button";

const TipSelector = () => {
  return (
    <div>
      <h4>Select Tip %</h4>
      <div className="button-container">
        <div className="button-row first-row">
          <Button mode="primary" value="5%" />
          <Button mode="primary" value="10%" />
          <Button mode="primary" value="15%" />
        </div>
        <div className="button-row">
          <Button mode="primary" value="20%" />
          <Button mode="primary" value="25%" />
          <Button mode="secondary" value="Custom" />
        </div>
      </div>
    </div>
  );
};

export default TipSelector;
