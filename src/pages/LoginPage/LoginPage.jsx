import LoginForm from "../../components/LoginForm/LoginForm";
import { useSelector } from "react-redux";
import { apiRegister } from "../../redux/auth/operations";

// import clsx from "clsx";
// import style from "./RegisterPage.module.css";

const LoginPage = () => {
  //   const test = useSelector((state) => state.contacts.loading);
  const test = apiRegister();

  console.log(test);
  return (
    <div>
      <h2>Hello</h2>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
