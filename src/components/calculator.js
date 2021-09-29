import React from "react";

// components
import InputBar from "./inputbar";
import TipSelector from "./tipselector";
import Button from "./button";
import Display from "./display";

const Calculator = () => {
  return (
    <div className="calculator-container">
      <div className="entry">
        <InputBar mode="bill-input" label="Bill" />
        <TipSelector />
        <InputBar mode="people-input" label="Number of People" />
      </div>
      <div className="values">
        <div className="values-container">
          <Display label="Tip Amount" />
          <Display label="Total" />
        </div>
        <div className="reset-button-container">
          <Button mode="reset" value="RESET" />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
