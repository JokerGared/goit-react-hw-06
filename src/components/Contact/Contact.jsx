import { FaPhone, FaUser } from "react-icons/fa6";
import s from "./Contact.module.css";

export const Contact = ({ contact: { name, number, id }, onDeleteContact }) => {
  return (
    <>
      <ul className={s.contactContainer}>
        <li className={s.userNameItem}>
          <FaUser />
          <h2 className={s.userName}>{name}</h2>
        </li>
        <li className={s.userPhoneItem}>
          <FaPhone />
          <p className={s.userPhone}>{number}</p>
        </li>
      </ul>
      <button
        className={s.deleteBtn}
        onClick={() => onDeleteContact(id)}
        type="button"
      >
        Delete
      </button>
    </>
  );
};
