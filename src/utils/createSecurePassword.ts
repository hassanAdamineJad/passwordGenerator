/**
 * Generates a secure password based on the specified options.
 * 
 */


interface ICreateSecurePassword {
    passwordLength: number;
    includeUppercase: boolean;
    includeLowercase: boolean;
    includeNumbers: boolean;
    includeSymbols: boolean;
  }

  export const createSecurePassword = ({
    passwordLength,
    includeUppercase,
    includeLowercase,
    includeNumbers,
    includeSymbols,
  }: ICreateSecurePassword) => {
    // Define character sets
    const specialCharacters = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
    const numericCharacters = "0123456789";
    const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";

    // Accumulate all allowed characters
    let availableChars = "";

    // Add character sets based on options
    if (includeUppercase) availableChars += uppercaseLetters;
    if (includeLowercase) availableChars += lowercaseLetters;
    if (includeNumbers) availableChars += numericCharacters;
    if (includeSymbols) availableChars += specialCharacters;

    // Initialize the generated password
    let generatedPassword = "";

    // Generate the password randomly from available characters
    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * availableChars.length);
      generatedPassword += availableChars[randomIndex];
    }

    // Return the generated passwor
    return generatedPassword;
  };