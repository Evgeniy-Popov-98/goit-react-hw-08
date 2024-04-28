/* eslint-disable react/prop-types */
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";

import clsx from "clsx";
import css from "./LoginForm.module.css";

const FORM_INITIAL_VALUES = { name: "", password: "" };

const mailBoxSchema = Yup.object().shape({
  email: Yup.string()
    .email("Enter a correct email!")
    .required("Enter your email!"),
  password: Yup.string()
    .min(8, "The password must contain at least 8 characters!")
    .required("Enter password!"),
});

const LoginForm = () => {
  const dispatch = useDispatch(); //!!!!!!!!

  const onAddContact = (values, actions) => {
    dispatch(addContact(values));

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={FORM_INITIAL_VALUES}
      validationSchema={mailBoxSchema}
      onSubmit={onAddContact}
    >
      <Form className={clsx(css.boxForm)}>
        <label className={clsx(css.labelForm)}>
          <span className={clsx(css.labelSpan)}>Name</span>
          <Field
            className={clsx(css.labelInput)}
            type="email"
            name="email"
            placeholder="Your email"
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
          Log In
        </button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
