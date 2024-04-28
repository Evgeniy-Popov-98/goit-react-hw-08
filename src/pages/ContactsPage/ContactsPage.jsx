import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contacts/slice";
import { isError, isLoading } from "../../redux/contacts/selectors";

import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import Contact from "../../components/Contact/Contact";
import Loader from "../../components/Loader/Loader";
import ErrorMessenger from "../../components/ErrorMessenger/ErrorMessenger";

import clsx from "clsx";
import css from "./ContactsPage.module.css";

const ContactList = () => {
  const loading = useSelector(isLoading);
  const errorMessenger = useSelector(isError);
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <>
      <ContactForm />
      <SearchBox />
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
