// Define action types for updating state
export type ActionType =
  | { type: 'TOGGLE_INCLUDE_LOWERCASE' }
  | { type: 'TOGGLE_INCLUDE_UPPERCASE' }
  | { type: 'TOGGLE_INCLUDE_NUMBERS' }
  | { type: 'TOGGLE_INCLUDE_SYMBOLS' }
  | { type: 'SET_PASSWORD_LENGTH'; payload: number }
  | { type: 'SET_PASSWORD'; payload: string }
  | { type: 'SET_ERROR'; payload: boolean }
  | { type: 'SET_ERROR_MESSAGE'; payload: string };




