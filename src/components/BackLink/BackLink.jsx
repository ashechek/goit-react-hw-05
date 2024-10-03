import { HiArrowLeft } from "react-icons/hi";
import { Link } from "react-router-dom";
import s from "./BackLink.module.css";

export const BackLink = ({ to, children }) => {
  return (
    <Link to={'/'} className={s.link}>
      <HiArrowLeft size="14" />
      {children}
    </Link>
  );
};
