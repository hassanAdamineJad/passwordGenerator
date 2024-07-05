import { FC } from "react";
import "../../styles/components/_button.scss";

type ButtonProps = {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  variant?: "primary" | "secondary" | "danger";
};

const Button: FC<ButtonProps> = ({
  label,
  onClick,
  disabled = false,
  variant = "primary",
}) => {
  return (
    <button
      className={`button ${variant}`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;
