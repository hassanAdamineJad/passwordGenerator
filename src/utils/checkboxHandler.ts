import { ChangeEvent } from "react";

type CheckboxOption =
  | "includeLowercase"
  | "includeUppercase"
  | "includeNumbers"
  | "includeSymbols";


  const TYPES_TRANSLATE ={
    includeLowercase:'TOGGLE_INCLUDE_LOWERCASE',
    includeUppercase:'TOGGLE_INCLUDE_UPPERCASE',
    includeNumbers:'TOGGLE_INCLUDE_NUMBERS',
    includeSymbols:'TOGGLE_INCLUDE_SYMBOLS',
   }

export default function checkboxChange(
    e: ChangeEvent<HTMLInputElement>,
    state: any,
    dispatch: any
  ) {

    const { includeLowercase,
      includeUppercase,
      includeNumbers,
      includeSymbols,} = state
    // Clear any existing error messages
    dispatch({ type: 'SET_ERROR', payload: false });

    // Get the current checkbox value (checked/unchecked)
    const value = e.target.checked;

    // Get the name of the checkbox that triggered the event
    const name = e.target.name as CheckboxOption;

    // Create an object representing the current state of all checkboxes
    const allSelected = {
      includeLowercase,
      includeUppercase,
      includeNumbers,
      includeSymbols,
    };

    // Update the state of the checkbox that was changed
    allSelected[name] = value;

    // Check if all checkboxes are unchecked
    const allValuesFalse = Object.values(allSelected).every((value) => !value);

    if (allValuesFalse) {
      // If all checkboxes are unchecked, show an error message
      dispatch({ type: 'SET_ERROR', payload: true });
      dispatch({ type: 'SET_ERROR_MESSAGE', payload: "You can’t unselect all of them." });

    } else {
      // Otherwise, update the state of the checkbox using the provided setter function
      dispatch( {type: TYPES_TRANSLATE[name]})
    }
  }

 