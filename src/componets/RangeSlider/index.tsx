import { useState } from "react";
import "../../styles/components/RangeSlider.scss";

const RangeSlider = ({
  min = 0,
  max = 20,
  step = 1,
  initialValue = 10,
  onChange,
}: {
  min?: number;
  max?: number;
  step?: number;
  initialValue?: number;
  onChange: (e: any) => void;
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
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={handleChange}
        className="slider"
      />
      <div className="value">{value}</div>
    </div>
  );
};

export default RangeSlider;
