import { Navigation } from "../Navigation/Navigation";
import { UserMenu } from "../UserMenu/UserMenu";
import { AuthNav } from "../AuthNav/AuthNav";

import clsx from "clsx";
import style from "./AppBar.module.css";

export const AppBar = () => {
  //   const isLoggedIn = true;
  const isLoggedIn = false;

  return (
    <header className={clsx(style.header)}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
