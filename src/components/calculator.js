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
        <InputBar id="bill-input" label="Bill" />
        <TipSelector />
        <InputBar id="people-input" label="Number of People" />
      </div>
      <div className="values">
        <Display label="Tip Amount" />
        <Display label="Total" />
        <Button mode="reset" value="RESET" />
      </div>
    </div>
  );
};

export default Calculator;
