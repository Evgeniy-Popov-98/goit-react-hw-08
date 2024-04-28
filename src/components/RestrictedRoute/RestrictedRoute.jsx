import { useSelector } from "react-redux";
// import { selectIsSignedIn } from "../../redux/auth/selectors";
import { Navigate } from "react-router-dom";

const RestrictedRoute = ({ children }) => {
  const isSignedIn = useSelector((state) => state.auth.isSignedIn);

  return isSignedIn ? <Navigate to="/contacts" replace /> : children;
};

export default RestrictedRoute;
