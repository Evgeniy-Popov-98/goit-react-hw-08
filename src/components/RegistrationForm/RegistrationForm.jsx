import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";

import clsx from "clsx";
import css from "./RegistrationForm.module.css";
const FORM_INITIAL_VALUES = { name: "", password: "" };

const mailBoxSchema = Yup.object().shape({
  name: Yup.string()
    .required("Email address is required!")
    .min(3, "Your contact name must be more than 3 characters!")
    .max(50, `Your contact name must be less than 50 characters!`),
  number: Yup.string()
    .required("Contact number is required!")
    .min(3, "Your contact number must be more than 3 characters!")
    .matches(
      /^\d{3}-\d{2}-\d{2}$/,
      `Invalid phone number format! Use "-", for example 123-45-67`
    ),
});

const RegistrationForm = () => {
  const dispatch = useDispatch();

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
          Add new contact
        </button>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
