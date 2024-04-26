import { Navigation } from "../Navigation/Navigation";

export const AppBar = () => {
  return (
    <header>
      <Navigation />
      {/* {isLoggedIn ? <UserMenu /> : <AuthNav />} */}
    </header>
  );
};
