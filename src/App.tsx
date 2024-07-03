import React, { useState } from "react";
import "./App.scss";
import Input from "./componets/Input";
import RangeSlider from "./componets/RangeSlider";
import Checkbox from "./componets/Checkbox";

function App() {
  const [isLowercase, setIsLowercase] = useState(true);
  const [isUppercase, setIsUppercase] = useState(false);
  const [isNumber, setIsNumber] = useState(false);
  const [isSymbol, setIsSymbol] = useState(false);
  return (
    <div className="container">
      <div className="card">
        <div className="card_item">
          <Input
            type="text"
            value=""
            name="result"
            placeholder="placeholder"
            onChange={(e) => console.log("e", e.target.value)}
          />
        </div>
        <div className="card_item">text</div>
        <div className="card_item">
          <RangeSlider onChange={(e: any) => console.log("eee", e)} />
        </div>
        <div className="card_item">
          <Checkbox
            label="Include Lowercase"
            name="lower"
            value={isLowercase}
            setValue={setIsLowercase}
          />
        </div>
        <div className="card_item">
          <Checkbox
            label="Include Uppercase"
            name="upper"
            value={isUppercase}
            setValue={setIsUppercase}
          />
        </div>{" "}
        <div className="card_item">
          <Checkbox
            label="Include Number"
            name="number"
            value={isNumber}
            setValue={setIsNumber}
          />
        </div>{" "}
        <div className="card_item">
          <Checkbox
            label="Include Symbol"
            name="upper"
            value={isSymbol}
            setValue={setIsSymbol}
          />
        </div>
        <div className="card_item">btn</div>
      </div>
    </div>
  );
}

export default App;
