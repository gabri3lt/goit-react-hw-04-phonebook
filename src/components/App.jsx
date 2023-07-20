import React, { useState, useEffect } from 'react';
import css from './App.module.css';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { v4 as uuidv4 } from 'uuid';

const App = () => {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);

  const [filter, setFilter] = useState('');

  useEffect(() => {
    const parsedContacts = JSON.parse(localStorage.getItem('contacts'));
    parsedContacts && setContacts(parsedContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleAddContact = data => {
    const newContact = { ...data, id: uuidv4() };

    if (
      contacts
        .map(contact => contact.name.toLowerCase())
        .includes(data.name.toLowerCase())
    ) {
      alert(`Contact "${data.name}" already exists`);
    } else {
      setContacts(prevContacts => [newContact, ...prevContacts]);
    }
  };

  const handleFilter = event => {
    const { value } = event.currentTarget;
    setFilter(value);
  };

  const getMatchingContacts = () => {
    const optimizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(optimizedFilter)
    );
  };

  const deleteContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };

  const filteredContacts = getMatchingContacts();

  return (
    <div className={css.container}>
      <section title="Phonebook" className={css.section}>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={handleAddContact} />
      </section>

      <section title="Contacts" className={css.section}>
        <h2>Contacts</h2>
        <Filter value={filter} onChange={handleFilter} />
        <ContactList
          contacts={filteredContacts}
          onDeleteContact={deleteContact}
        />
      </section>
    </div>
  );
};

export default App;
