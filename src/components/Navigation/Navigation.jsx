import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

import clsx from "clsx";
import style from "./Navigation.module.css";

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <nav className={clsx(style.navBox)}>
      <NavLink to="/" className={clsx(style.homeBtn)}>
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts" className={clsx(style.contactsBtn)}>
          Contacts
        </NavLink>
      )}
    </nav>
  );
};
