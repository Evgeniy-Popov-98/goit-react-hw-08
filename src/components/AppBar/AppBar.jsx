import { useSelector } from "react-redux";
import { Navigation } from "../Navigation/Navigation";
import { UserMenu } from "../UserMenu/UserMenu";
import { AuthNav } from "../AuthNav/AuthNav";

import clsx from "clsx";
import style from "./AppBar.module.css";

export const AppBar = () => {
  const isSignedIn = useSelector((state) => state.auth.isSignedIn);

  return (
    <header className={clsx(style.header)}>
      <Navigation />
      {isSignedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
