import { NavLink } from "react-router-dom";

import clsx from "clsx";
import style from "./AuthNav.module.css";

export const AuthNav = () => {
  return (
    <div>
      <NavLink to="/register" className={clsx(style.registerBtn)}>
        Register
      </NavLink>
      <NavLink to="/login" className={clsx(style.loginBtn)}>
        Login
      </NavLink>
    </div>
  );
};
