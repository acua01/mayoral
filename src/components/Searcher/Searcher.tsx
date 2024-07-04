import { ChangeEvent, FC } from "react";
import { IoSearch } from "react-icons/io5";

type TProps = {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const Searcher: FC<TProps> = ({ value, onChange }) => (
  <div className="c-searcher" role="searchbox">
    <label className="c-searcher__label" id="search-label" htmlFor="search-input">
      <IoSearch/>
    </label>
    <input
      id="search-input"
      className="c-searcher__input"
      type="text"
      value={value}
      onChange={onChange}
      placeholder="Buscar"
      aria-labelledby="search-label"
      role="search"
    />
  </div>
);