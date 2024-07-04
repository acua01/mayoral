import { FC } from "react";

type TProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

export const OrderBySelector: FC<TProps> = ({ value, onChange }) => (
  <div className="c-order-by-selector" role="searchbox">
    <label 
      className="c-order-by-selector__label" 
      id="order-by-selector-label" 
      htmlFor="search-input"
    >
      Ordenar:
    </label>
    <select 
      id="order-by-selector" 
      className="c-order-by-selector__selector" 
      aria-labelledby="order-by-selector-label"
      value={value}
      onChange={onChange}
    >
      <option value="asc">Precio - asc</option>
      <option value="desc">Precio - desc</option>
    </select>
  </div>
);