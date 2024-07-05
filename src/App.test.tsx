import { createSecurePassword } from "./utils/createSecurePassword";

describe("createSecurePassword", () => {
  test("generates a password of the correct length", () => {
    const options = {
      passwordLength: 10,
      includeUppercase: true,
      includeLowercase: true,
      includeNumbers: true,
      includeSymbols: true,
    };

    const password = createSecurePassword(options);
    expect(password).toHaveLength(10);
  });

  test("generates a password with only lowercase letters", () => {
    const options = {
      passwordLength: 8,
      includeUppercase: false,
      includeLowercase: true,
      includeNumbers: false,
      includeSymbols: false,
    };

    const password = createSecurePassword(options);
    expect(password).toMatch(/^[a-z]{8}$/);
  });

  test("generates a password with uppercase and lowercase letters", () => {
    const options = {
      passwordLength: 12,
      includeUppercase: true,
      includeLowercase: true,
      includeNumbers: false,
      includeSymbols: false,
    };

    const password = createSecurePassword(options);
    expect(password).toMatch(/^[A-Za-z]{12}$/);
  });

  test("generates a password with numbers only", () => {
    const options = {
      passwordLength: 6,
      includeUppercase: false,
      includeLowercase: false,
      includeNumbers: true,
      includeSymbols: false,
    };

    const password = createSecurePassword(options);
    expect(password).toMatch(/^\d{6}$/);
  });

  test("generates a password with all character types", () => {
    const options = {
      passwordLength: 15,
      includeUppercase: true,
      includeLowercase: true,
      includeNumbers: true,
      includeSymbols: true,
    };

    const password = createSecurePassword(options);

    // Check that password contains at least one character from each selected set
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSymbol = /[!@#$%^&*()_+~`|}{[\]:;?><,./-]/.test(password);

    expect(hasUppercase).toBe(true);
    expect(hasLowercase).toBe(true);
    expect(hasNumber).toBe(true);
    expect(hasSymbol).toBe(true);
  });
});
