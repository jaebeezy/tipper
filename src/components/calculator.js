import React, { useEffect, useState } from "react";

// components
import InputBar from "./inputbar";
import TipSelector from "./tipselector";
import Button from "./button";
import Display from "./display";

const Calculator = () => {
  // states to manage for calculator
  const [bill, setBill] = useState();
  const [people, setPeople] = useState(1);
  const [total, setTotal] = useState(0);
  const [tip, setTip] = useState(0);
  const [showCustom, setShowCustom] = useState(false);

  // event handler for reset button
  const resetButtonHandler = () => {
    setBill("");
    setTip(0);
    setPeople(1);
    setShowCustom(false);
  };

  // ui will update everytime bill or tip is changed
  useEffect(() => {
    let newTotal = Number(bill) + Number(tip);
    setTotal(newTotal);
  }, [bill, tip]);

  return (
    <div className="calculator-container">
      <div className="entry">
        <InputBar
          mode="bill-input"
          label="Bill"
          type="text"
          value={bill || ""}
          onChange={setBill}
        />
        <TipSelector
          bill={bill}
          setTip={setTip}
          showCustom={showCustom}
          setShowCustom={setShowCustom}
        />
        <InputBar
          mode="people-input"
          label="Number of People"
          type="number"
          value={people}
          onChange={setPeople}
        />
      </div>
      <div className="values">
        <div className="values-container">
          <Display
            name="tip-container"
            label="Tip Amount"
            amount={tip}
            people={people}
          />
          <Display
            name="total-container"
            label="Total"
            amount={total}
            people={people}
          />
        </div>
        <div className="reset-button-container">
          <Button
            mode="reset"
            name="RESET"
            onClick={resetButtonHandler}
            disabled={!bill && people === 1 && !showCustom ? true : false}
          />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
