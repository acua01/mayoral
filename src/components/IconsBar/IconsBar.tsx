import { FC } from "react";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

export const IconsBar: FC = () => (
  <div className="c-icons-bar" role="group">
    <FaMinus />
    <FaPlus />
  </div>
);