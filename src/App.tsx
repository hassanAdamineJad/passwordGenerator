import React from "react";
import "./App.scss";
import Input from "./componets/Input";
import RangeSlider from "./componets/RangeSlider";

function App() {
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
        <div className="card_item">check box</div>
        <div className="card_item">btn</div>
      </div>
    </div>
  );
}

export default App;
