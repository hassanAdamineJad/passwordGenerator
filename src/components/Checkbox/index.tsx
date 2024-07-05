// checkbox.js
import { ChangeEvent, FC } from "react";
import "../../styles/components/_checkbox.scss";

interface ICheckboxProps {
  name: string;
  value: boolean;
  label: string;
  onChange: any;
}

const Checkbox: FC<ICheckboxProps> = ({ name, value, label, onChange }) => {
  return (
    <label className="checkbox">
      <input
        type="checkbox"
        name={name}
        checked={value}
        onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e)}
      />
      {label}
    </label>
  );
};

export default Checkbox;
