import React from "react";

import Button from "./button";

const TipSelector = ({ bill, setTip, showCustom, setShowCustom }) => {
  // handler function to calculate tip amount from bill
  const buttonClickHandler = (e) => {
    let tipAmount = bill * e.target.value;
    setTip(tipAmount);
    setShowCustom(false);
  };

  return (
    <div>
      <h4>Select Tip %</h4>
      <div className="button-container">
        <div className="button-row first-row">
          <Button
            mode="primary"
            name="5%"
            value={0.05}
            onClick={(e) => buttonClickHandler(e)}
          />
          <Button
            mode="primary"
            name="10%"
            value={0.1}
            onClick={(e) => buttonClickHandler(e)}
          />
          <Button
            mode="primary"
            name="15%"
            value={0.15}
            onClick={(e) => buttonClickHandler(e)}
          />
        </div>
        <div className="button-row">
          <Button
            mode="primary"
            name="20%"
            value={0.2}
            onClick={(e) => buttonClickHandler(e)}
          />
          <Button
            mode="primary"
            name="25%"
            value={0.25}
            onClick={(e) => buttonClickHandler(e)}
          />
          <div
            className="custom-button-container"
            onClick={() => setShowCustom(true)}
          >
            {showCustom ? (
              <div className="toggle-box">
                <input
                  className="custom-input"
                  type="text"
                  onChange={(e) => setTip(e.target.value)}
                  min="0"
                  autoFocus
                />
              </div>
            ) : (
              <Button mode="secondary" name="Custom" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TipSelector;
