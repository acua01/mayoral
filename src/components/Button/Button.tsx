import { FC } from "react";

type TProps = {
  text: string,
  onClick?: () => void
}

export const Button: FC<TProps> = ({text, onClick}) => (
  <button className="c-button" onClick={onClick}>
    {text}
  </button>
);