/* eslint-disable react/prop-types */
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import { addContact } from "../../redux/contacts/operations";

import clsx from "clsx";
import css from "./ContactForm.module.css";

const FORM_INITIAL_VALUES = { name: "", number: "" };

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

const ContactForm = () => {
  const dispatch = useDispatch();

  const onAddContact = (values, actions) => {
    console.log(true);
    toast.success("Contact added successfully!");
    dispatch(addContact(values));
    actions.resetForm();
  };

  return (
    <>
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
            <span className={clsx(css.labelSpan)}>Number</span>
            <Field
              className={clsx(css.labelInput)}
              type="tel"
              name="number"
              placeholder="123-45-67"
            />
            <ErrorMessage component="p" name="number" />
          </label>
          <button className={clsx(css.formButton)} type="submit">
            Add new contact
          </button>
        </Form>
      </Formik>
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
};

export default ContactForm;
