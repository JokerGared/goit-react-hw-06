import { useEffect, useState } from "react";
import "./App.css";
import { ContactForm, SearchBox, ContactList } from "./components";

function App() {
  const KEY = "contacts";

  const getContacts = () => {
    try {
      const savedData = JSON.parse(localStorage.getItem(KEY));
      return Array.isArray(savedData) ? savedData : [];
    } catch {
      return [];
    }
  };

  const saveContacts = (contacts) => {
    localStorage.setItem(KEY, JSON.stringify(contacts));
  };

  const [contacts, setContacts] = useState(() => getContacts());
  const [filter, setFilter] = useState("");

  const filteredContacts = contacts.filter((contact) => {
    return contact.name.toLowerCase().includes(filter.toLowerCase());
  });

  useEffect(() => {
    saveContacts(contacts);
  }, [contacts]);

  const handleAddContact = (newContact) => {
    setContacts((prevContacts) => {
      return [...prevContacts, newContact];
    });
  };

  const handleDeleteContact = (id) => {
    setContacts((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== id);
    });
  };

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={handleAddContact} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList
        contacts={filteredContacts}
        onDeleteContact={handleDeleteContact}
      />
      {contacts.length < 1 && <p>There is no contacts yet</p>}
    </>
  );
}

export default App;
