import { FC } from "react";

export type TSelectOption = {
  text: string; 
  value: string;
}

type TProps = {
  label: string;
  value: string;
  options: TSelectOption[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

export const Select: FC<TProps> = ({ label, value, onChange, options }) => (
  <div className="c-order-by-selector" role="searchbox">
    <label 
      className="c-order-by-selector__label" 
      id="order-by-selector-label" 
      htmlFor="search-input"
    >
      {label}
    </label>
    <select 
      id="order-by-selector" 
      className="c-order-by-selector__selector" 
      aria-labelledby="order-by-selector-label"
      value={value}
      onChange={onChange}
    >
      {options.map(o => (
        <option key={o.value} value={o.value}>{o.text}</option>
      ))}
    </select>
  </div>
);