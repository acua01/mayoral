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
  <div className="c-select" role="searchbox">
    <label 
      className="c-select__label" 
      id="select-label" 
      htmlFor="search-input"
    >
      {label}
    </label>
    <select 
      id="select" 
      className="c-select__selector" 
      aria-labelledby="select-label"
      value={value}
      onChange={onChange}
    >
      {options.map(o => (
        <option key={o.value} value={o.value}>{o.text}</option>
      ))}
    </select>
  </div>
);