import { Contact } from "../Contact/Contact";
import s from "./ContactList.module.css";

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={s.contactList}>
      {contacts.map((contact) => (
        <li className={s.contactItem} key={contact.id}>
          <Contact onDeleteContact={onDeleteContact} contact={contact} />
        </li>
      ))}
    </ul>
  );
};
