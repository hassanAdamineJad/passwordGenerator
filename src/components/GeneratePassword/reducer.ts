import { ActionType } from "./actions";


// Interface for the state
export interface PasswordGeneratorState {
  includeLowercase: boolean;
  includeUppercase: boolean;
  includeNumbers: boolean;
  includeSymbols: boolean;
  passwordLength: number;
  password: string;
  error: boolean;
  errorMessage: string;
}

// Initial state
export const initialState: PasswordGeneratorState = {
    includeLowercase: true,
    includeUppercase: false,
    includeNumbers: false,
    includeSymbols: false,
    passwordLength: 6,
    password: '',
    error: false,
    errorMessage: '',
  };


// Reducer function
export const reducer = (state: PasswordGeneratorState, action: ActionType) => {
    switch (action.type) {
      case 'TOGGLE_INCLUDE_LOWERCASE':
        return { ...state, includeLowercase: !state.includeLowercase };
      case 'TOGGLE_INCLUDE_UPPERCASE':
        return { ...state, includeUppercase: !state.includeUppercase };
      case 'TOGGLE_INCLUDE_NUMBERS':
        return { ...state, includeNumbers: !state.includeNumbers };
      case 'TOGGLE_INCLUDE_SYMBOLS':
        return { ...state, includeSymbols: !state.includeSymbols };
      case 'SET_PASSWORD_LENGTH':
        return { ...state, passwordLength: action.payload };
      case 'SET_PASSWORD':
        return { ...state, password: action.payload };
      case 'SET_ERROR':
        return { ...state, error: action.payload };
      case 'SET_ERROR_MESSAGE':
        return { ...state, errorMessage: action.payload };
      default:
        return state;
    }
  };