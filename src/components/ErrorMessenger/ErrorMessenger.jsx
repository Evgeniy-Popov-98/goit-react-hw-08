import clsx from "clsx";
import style from "./ErrorMessenger.module.css";
import { useSelector } from "react-redux";

const ErrorMessege = () => {
  const errorMesseng = useSelector((state) => state.contacts.error);

  return (
    <div className={clsx(style.errorContainer)}>
      <p className={clsx(style.errorText)}>
        Unfortunately, the add-on is not working at the moment❗ Please try
        again later 😅
      </p>
      <p>({errorMesseng})</p>
    </div>
  );
};

export default ErrorMessege;
