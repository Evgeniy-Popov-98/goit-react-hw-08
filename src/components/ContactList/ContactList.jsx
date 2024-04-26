import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contactsSlice";

import Loader from "../Loader/Loader";
import ErrorMessenger from "../ErrorMessenger/ErrorMessenger";
import Contact from "../Contact/Contact";

import clsx from "clsx";
import css from "./ContactList.module.css";

const ContactList = () => {
  const loading = useSelector((state) => state.contacts.loading);
  const errorMessenger = useSelector((state) => state.contacts.error);
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <>
      {loading && <Loader />}
      {errorMessenger && <ErrorMessenger />}
      <ul className={clsx(css.contactsList)}>
        {Array.isArray(filteredContacts) &&
          filteredContacts.map((contact) => {
            return <Contact key={contact.id} contact={contact} />;
          })}
      </ul>
    </>
  );
};

export default ContactList;
