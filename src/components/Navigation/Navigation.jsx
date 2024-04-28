import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import clsx from "clsx";
import style from "./Navigation.module.css";

export const Navigation = () => {
  const isSignedIn = useSelector((state) => state.auth.isSignedIn);
  return (
    <nav className={clsx(style.navBox)}>
      <NavLink to="/" className={clsx(style.homeBtn)}>
        Home
      </NavLink>
      {isSignedIn && (
        <NavLink to="/contacts" className={clsx(style.contactsBtn)}>
          Contacts
        </NavLink>
      )}
    </nav>
  );
};
