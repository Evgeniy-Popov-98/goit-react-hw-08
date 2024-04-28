import { NavLink } from "react-router-dom";

import clsx from "clsx";
import style from "./Navigation.module.css";

export const Navigation = () => {
  //   const btn = false;
  const btn = true;
  return (
    <nav className={clsx(style.navBox)}>
      <NavLink to="/" className={clsx(style.homeBtn)}>
        Home
      </NavLink>
      {btn && (
        <NavLink to="/contacts" className={clsx(style.contactsBtn)}>
          Contacts
        </NavLink>
      )}
    </nav>
  );
};
