// checkbox.js
import React from "react";
import "../../styles/components/Checkbox.scss";

interface ICheckboxProps {
  name: string;
  value: boolean;
  label: string;
  setValue: (v: boolean) => void;
}

const Checkbox = ({ name, value, label, setValue }: ICheckboxProps) => {
  return (
    <label className="checkbox">
      <input
        type="checkbox"
        name={name}
        checked={value}
        onChange={() => {
          setValue(!value);
        }}
      />
      {label}
    </label>
  );
};

export default Checkbox;
