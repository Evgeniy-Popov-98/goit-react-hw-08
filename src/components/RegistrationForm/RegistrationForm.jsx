import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";

import clsx from "clsx";
import css from "./RegistrationForm.module.css";

const FORM_INITIAL_VALUES = { name: "", email: "", password: "" };

const mailBoxSchema = Yup.object().shape({
  name: Yup.string()
    .required("Адреса електронної пошти обов'язкова!")
    .min(3, "Your contact name must be more than 3 characters!")
    .max(50, `Your contact name must be less than 50 characters!`),
  email: Yup.string()
    .email("Enter a correct email!")
    .required("Enter your email!"),
  password: Yup.string()
    .min(8, "The password must contain at least 8 characters!")
    .required("Enter password!"),
});

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={FORM_INITIAL_VALUES}
      validationSchema={mailBoxSchema}
      onSubmit={handleSubmit}
    >
      <Form className={clsx(css.boxForm)}>
        <label className={clsx(css.labelForm)}>
          <span className={clsx(css.labelSpan)}>Name</span>
          <Field
            className={clsx(css.labelInput)}
            type="text"
            name="name"
            placeholder="Your name"
          />
          <ErrorMessage component="p" name="name" />
        </label>
        <label className={clsx(css.labelForm)}>
          <span className={clsx(css.labelSpan)}>Email</span>
          <Field
            className={clsx(css.labelInput)}
            type="email"
            name="email"
            placeholder="Your password"
          />
          <ErrorMessage component="p" name="email" />
        </label>
        <label className={clsx(css.labelForm)}>
          <span className={clsx(css.labelSpan)}>Password</span>
          <Field
            className={clsx(css.labelInput)}
            type="password"
            name="password"
            placeholder="Your password"
          />
          <ErrorMessage component="p" name="password" />
        </label>
        <button className={clsx(css.formButton)} type="submit">
          Register
        </button>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
