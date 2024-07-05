import { ChangeEvent, FC, useState } from "react";
import "../../styles/components/_input.scss";

interface InputProps {
  type: "text" | "number" | "email" | "password";
  label?: string;
  value: string;
  name: string;
  placeholder: string;
  error?: boolean;
  disabled?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<InputProps> = ({
  type,
  label,
  value,
  name,
  placeholder,
  error,
  disabled,
  onChange,
}) => {
  const [copySuccess, setCopySuccess] = useState("");

  const copyToClipBoard = async (copyMe: string) => {
    try {
      await navigator.clipboard.writeText(copyMe);
      setCopySuccess("Copied!");
    } catch (err) {
      setCopySuccess("Failed to copy!");
    }
  };
  return (
    <div className="input">
      {label && (
        <label className="input_label" htmlFor={label}>
          {label}
        </label>
      )}
      <input
        className="input_input"
        type={type}
        id={label}
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        disabled={disabled}
      />
      <div className="input_clipboard">
        {<button onClick={() => copyToClipBoard(value)}>Copy</button>}
        {copySuccess && <div>{copySuccess}</div>}
      </div>

      {error && <p className="input_error">Input filed can't be empty!</p>}
    </div>
  );
};

export default Input;
