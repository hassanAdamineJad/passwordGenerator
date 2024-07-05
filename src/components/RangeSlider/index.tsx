import { FC, useState } from "react";
import "../../styles/components/RangeSlider.scss";

interface IRangeSliderProps {
  min?: number;
  max?: number;
  step?: number;
  initialValue?: number;
  label?: string;
  onChange: (e: any) => void;
}

const RangeSlider: FC<IRangeSliderProps> = ({
  min = 0,
  max = 20,
  step = 1,
  initialValue = 10,
  onChange,
  label = "",
}) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (event: any) => {
    const newValue = event.target.value;
    setValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <div className="range-slider">
      {label && <label className="range-slider_label">{label}</label>}
      <div className="range-slider_wrapper">
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={handleChange}
          className="range-slider_input"
        />
        <div className="range-slider_value">{value}</div>
      </div>
    </div>
  );
};

export default RangeSlider;
