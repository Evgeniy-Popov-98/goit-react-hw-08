import clsx from "clsx";
import style from "./UserMenu.module.css";

export const UserMenu = () => {
  return (
    <div className={clsx(style.userContainer)}>
      <p className={clsx(style.userText)}>Welcome, user</p>
      <button
        className={clsx(style.logoutBtn)}
        type="button"
        onClick={() => console.log("user")}
      >
        Logout
      </button>
    </div>
  );
};
