import { NavLink } from "react-router-dom";

import clsx from "clsx";
import style from "./Navigation.module.css";

export const Navigation = () => {
  return (
    <nav className={clsx(style.navBox)}>
      <NavLink to="/" className={clsx(style.homeBtn)}>
        Home
      </NavLink>
      <NavLink to="/contacts" className={clsx(style.contactsBtn)}>
        Contacts
      </NavLink>
    </nav>
  );
};
