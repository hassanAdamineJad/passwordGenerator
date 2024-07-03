import React, { useState } from "react";
import "./App.scss";
import Input from "./componets/Input";
import RangeSlider from "./componets/RangeSlider";
import Checkbox from "./componets/Checkbox";
import Button from "./componets/Button";

function App() {
  const [isLowercase, setIsLowercase] = useState(true);
  const [isUppercase, setIsUppercase] = useState(false);
  const [isNumber, setIsNumber] = useState(false);
  const [isSymbol, setIsSymbol] = useState(false);

  const GeneratePass = () => {
    console.log("Generating");
  };

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
        <div className="card_item">
          <RangeSlider
            label={`Character Length`}
            onChange={(e: any) => console.log("eee", e)}
          />
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
            label="Include Numbers"
            name="number"
            value={isNumber}
            setValue={setIsNumber}
          />
        </div>{" "}
        <div className="card_item">
          <Checkbox
            label="Include Symbols"
            name="upper"
            value={isSymbol}
            setValue={setIsSymbol}
          />
        </div>
        <div className="card_item">
          <Button label="Generate" onClick={GeneratePass} variant="primary" />
        </div>
      </div>
    </div>
  );
}

export default App;
