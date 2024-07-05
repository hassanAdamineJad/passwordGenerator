import { ChangeEvent, useReducer } from "react";
import { createSecurePassword } from "../../utils/createSecurePassword";
import Button from "../Button";
import Checkbox from "../Checkbox";
import Input from "../Input";
import RangeSlider from "../RangeSlider";
import checkboxChange from "../../utils/checkboxHandler";
import { initialState, reducer } from "./reducer";

function GeneratePassword() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function handleCheckboxChange(e: ChangeEvent<HTMLInputElement>) {
    checkboxChange(e, state, dispatch);
  }

  function handleButtonClick() {
    const password = createSecurePassword(state);
    dispatch({ type: "SET_PASSWORD", payload: password });
  }

  function handleRangeSlider(length: number) {
    dispatch({ type: "SET_PASSWORD_LENGTH", payload: length });
  }

  return (
    <div className="content">
      <Input
        type="text"
        value={state.password}
        name="result"
        placeholder="placeholder"
      />

      <RangeSlider
        label={`Character Length`}
        initialValue={state.passwordLength}
        onChange={handleRangeSlider}
      />

      <Checkbox
        label="Include Lowercase"
        name="includeLowercase"
        value={state.includeLowercase}
        onChange={handleCheckboxChange}
      />

      <Checkbox
        label="Include Uppercase"
        name="includeUppercase"
        value={state.includeUppercase}
        onChange={handleCheckboxChange}
      />

      <Checkbox
        label="Include Numbers"
        name="includeNumbers"
        value={state.includeNumbers}
        onChange={handleCheckboxChange}
      />

      <Checkbox
        label="Include Symbols"
        name="includeSymbols"
        value={state.includeSymbols}
        onChange={handleCheckboxChange}
      />
      <div className="error"> &nbsp; {state.error && state.errorMessage} </div>
      <Button label="Generate" onClick={handleButtonClick} variant="primary" />
    </div>
  );
}

export default GeneratePassword;
